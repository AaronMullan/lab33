import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const Items = ({ item }) => {
  const itemElements = item.map((item, i) =>
    (<li key={i}>
      <Item item={item} />
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
  item: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Items;
