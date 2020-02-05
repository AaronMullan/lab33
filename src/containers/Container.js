import React from 'react';
import Items from '../components/items/Items';
import { useItems } from '../hooks/useItems';

const Container = () => {
  const { items } = useItems();

  return (
    <>
      <h1>Hello From Container</h1>
    </>
  );
};

export default Container;
