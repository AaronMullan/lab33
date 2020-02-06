import React from 'react';
import Detail from '../components/details/Detail';
import { useItems } from '../hooks/useItems';
import { useParams } from 'react-router-dom';


const DetailContainer = ({ match }) => {
  const { items } = useItems();
  const { id } = useParams();
  console.log(items);

  return (
    <>
      <h2>Details</h2>
      <Detail items={items} />
    </>
  );
};

export default DetailContainer;
