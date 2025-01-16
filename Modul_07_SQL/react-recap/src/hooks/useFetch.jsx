import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setPending(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: abortController.signal });
        if (!res.ok) {
          throw new Error('Error while fetching: ' + res.status);
        }

        const d = await res.json();
        setData(d);
        console.log(d);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error(error);
        setError(error);
      } finally {
        setPending(false);
      }
    };
    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, pending };
}
