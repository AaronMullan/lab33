import React from 'react';
import Items from '../components/items/Items';
import { useItems } from '../hooks/useItems';

const Container = () => {
  const { items, getNewItems, setPageNumber, pageNumber } = useItems();

  return (
    <>
      <h1>Characters</h1>
      <label>
        Page Number
        <input 
          name="pageNumber"
          type="number"
          value={pageNumber}
          onChange={setPageNumber}/>
      </label>
      <button onClick={getNewItems}>Get Items</button>
      <Items items={items} />
    </>
  );
};

export default Container;
