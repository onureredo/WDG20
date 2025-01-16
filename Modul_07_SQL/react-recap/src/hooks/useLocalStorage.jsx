import { useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultVal) {
  const [storedVal, setStoredVal] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      if (stored) return stored;
      else localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    } catch {
      return defaultVal;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedVal));
  }, [storedVal, defaultVal, key]);

  return [storedVal, setStoredVal];
}
