import { renderHook, act } from '@testing-library/react';
import useAPI from './useAPI';
import fetchMock from 'jest-fetch-mock';
import { waitFor } from '@testing-library/react';

fetchMock.enableMocks();

type Book = {
  id: string;
  title: string;
  author: string;
};

describe('useAPI Hook', () => {
  const baseURL = 'https://something.com/v1/api';
  const authToken = 'test-token';
  const headers = { 'Custom-Header': 'value' };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch all books', async () => {
    const books: Book[] = [
      { id: '1', title: 'Book 1', author: 'Author 1' },
      { id: '2', title: 'Book 2', author: 'Author 2' },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(books));

    const { result } = renderHook(() => useAPI<Book>(baseURL, authToken, headers));

    let data: Book[] = [];
    await act(async () => {
      data = await result.current.getAll('books');
    });

    expect(data).toEqual(books);
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/books`, expect.anything());
  });

  it('should handle fetch errors', async () => {
    fetchMock.mockRejectOnce(new Error('API request failed'));

    const { result } = renderHook(() => useAPI<Book>(baseURL, authToken, headers));

    await expect(result.current.getAll('books')).rejects.toThrow('API request failed');
  });

  it('should abort the request', async () => {
    const endpoint = 'resource/1';

    // Mock the fetch function
    const mockAbort = jest.fn();
    const mockFetch = jest.fn().mockImplementation(() =>
      new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject({ name: 'AbortError' });
        }, 100);
      })
    );
    global.fetch = mockFetch;
    
    global.AbortController = jest.fn(() => ({
      abort: mockAbort,
      signal: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any);

    const { result } = renderHook(() => useAPI(baseURL, authToken, headers));

    // Trigger a GET request
    act(() => {
      result.current.getOne(endpoint);
    });

    // Abort the request
    act(() => {
      result.current.abortRequest(endpoint);
    });

    // Use waitFor to wait for the state update after abort
    await waitFor(() => {
      expect(mockAbort).toHaveBeenCalled();
      expect(mockFetch).toHaveBeenCalledWith(`${baseURL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
          'Custom-Header': 'value',
        },
        signal: {},
      });
    });
  });
});
