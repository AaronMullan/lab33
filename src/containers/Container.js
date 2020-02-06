import React from 'react';
import Items from '../components/items/Items';
import { useItems } from '../hooks/useItems';

const Container = () => {
  const { items } = useItems();

  return (
    <>
      <h1>Characters</h1>
      <button onClick={useItems}>Get Items</button>
      <Items items={items} />
    </>
  );
};

export default Container;
