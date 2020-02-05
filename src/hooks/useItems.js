import { useState, useEffect } from 'react';
import { getItems } from '../services/getItems';

export const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then(items => setItems(items));
  }), [];

  return { items, useItems };
};
