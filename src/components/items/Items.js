import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Items = ({ items }) => {
  const itemElements = items.map((item) =>
    (<li key={item.id}>
      <Item name={item.name} image={item.image} id={item.id}/>
    </li>));
  return (
    <>
      <ul>
        {itemElements}
      </ul>
    </>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Items;
