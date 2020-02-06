import React from 'react';
import Detail from '../components/details/Detail';
import { useItems } from '../hooks/useItems';


const DetailContainer = () => {
  const { items } = useItems();

  return (
    <>
      <h2>Details</h2>
      <Detail items={items} />
    </>
  );
};

export default DetailContainer;
