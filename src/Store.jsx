
import { useEffect, useState } from 'react';

const Store= (key, initialValue) => {
  const getValue = () => localStorage.getItem(key) || sessionStorage.getItem(key);

  const [content, setContent] = useState(() => getValue() || initialValue);

  useEffect(() => {
    localStorage.setItem(key, content);
    sessionStorage.setItem(key, content);
  }, [key, content]);

  return [content, setContent];
};

export default Store;
