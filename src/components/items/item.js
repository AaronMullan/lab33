import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Item = ({ name, image }) => (

  <section>
    <h2>{name}</h2>
    <img src={image} alt={name}/>
  </section>
  
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Item;
