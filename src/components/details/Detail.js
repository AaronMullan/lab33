import React from 'react';
import PropTypes from 'prop-types';


const Detail = ({ name, image, status, species }) => {
  
  return (
    <section>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Detail;
