import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ name, image, id }) => (

  <section>
    <Link to={`DetailContainer/${id}`}>
      <h2>{name}</h2>
      <img src={image} alt={name}/>
    </Link>
  </section>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Item;
