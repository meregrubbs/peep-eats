import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ title, image, blurb, category }) => {
  return (
    <div className='category-item col s12 m6 l4'>
      <div
        className='category-img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className='category'>{category}</span>
      <h1 className='recipe-title'>{title}</h1>
      <h2 className='recipe-blurb'>{blurb}</h2>
    </div>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default CategoryItem;
