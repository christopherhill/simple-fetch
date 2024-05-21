import { useCallback, useRef } from 'react';

type ApiHook<T> = {
  getAll: (resource: string) => Promise<T[]>;
  getOne: (resource: string) => Promise<T>;
  post: (resource: string, payload: object) => Promise<T>;
  put: (resource: string, payload: object) => Promise<T>;
  patch: (resource: string, payload: object) => Promise<T>;
  del: (resource: string) => Promise<void>;
  abortRequest: (resource: string) => void;
};

const useAPI = <T,>(baseURL: string, authToken: string, headers: Record<string, string> = {}): ApiHook<T> => {
  const abortControllers = useRef<Map<string, AbortController>>(new Map());

  const fetchAPI = useCallback(async (endpoint: string, options: RequestInit = {}) => {
    const url = `${baseURL}/${endpoint}`;
    const controller = new AbortController();
    const signal = controller.signal;

    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
      ...headers,
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      signal,
    };

    abortControllers.current.set(endpoint, controller);

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      return data;
    } finally {
      abortControllers.current.delete(endpoint);
    }
  }, [baseURL, authToken, headers]);

  const abortRequest = useCallback((endpoint: string) => {
    console.log('boom ', { endpoint, h: abortControllers.current.get(endpoint) })
    if (abortControllers.current.has(endpoint)) {
      abortControllers.current.get(endpoint)?.abort();
      abortControllers.current.delete(endpoint);
    }
  }, [abortControllers]);

  const getAll = useCallback((resource: string) => {
    return fetchAPI(resource, { method: 'GET' });
  }, [fetchAPI]);

  const getOne = useCallback((resource: string) => {
    return fetchAPI(resource, { method: 'GET' });
  }, [fetchAPI]);

  const post = useCallback((resource: string, payload: object) => {
    return fetchAPI(resource, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }, [fetchAPI]);

  const put = useCallback((resource: string, payload: object) => {
    return fetchAPI(resource, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }, [fetchAPI]);

  const patch = useCallback((resource: string, payload: object) => {
    return fetchAPI(resource, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  }, [fetchAPI]);

  const del = useCallback((resource: string) => {
    return fetchAPI(resource, { method: 'DELETE' });
  }, [fetchAPI]);

  return {
    getAll,
    getOne,
    post,
    put,
    patch,
    del,
    abortRequest,
  };
};

export default useAPI;