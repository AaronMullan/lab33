import { useState, useEffect } from 'react';
import { getItems } from '../services/getItems';

export const useItems = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(5);

  useEffect(() => {
    getItems(pageNumber)
      .then(items => setItems(items));
  }, []);

  const getNewItems = () => {
    getItems(pageNumber)
      .then(items => setItems(items));
  };

  return { items, pageNumber, setPageNumber, getNewItems };
};

