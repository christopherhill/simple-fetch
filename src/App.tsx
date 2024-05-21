import React, { useEffect, useState } from 'react';
import useAPI from './hooks/useAPI';

type Book = {
  id: string;
  title: string;
}

const ExampleComponent: React.FC = () => {
  const api = useAPI<Book>('https://something.com/v1/api', 'your-auth-token');
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await api.getAll('books');
        setBooks(data);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message);
        }
      }
    };

    fetchBooks();

    // Cleanup function to abort the request
    return () => {
      api.abortRequest('books');
    };
  }, [api]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;