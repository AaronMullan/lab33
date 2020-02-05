import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const Items = ({ items }) => {
  const itemElements = items.map((item, i) =>
    (<li key={i}>
      <Item name={item.name} image={item.image}/>
    </li>));
  return (
    <>
      <h2>hello</h2>
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
