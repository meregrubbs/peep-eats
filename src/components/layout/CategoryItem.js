import React from 'react';
import PropTypes from 'prop-types';

import img from '../../images/hero/peep-eats-hero-400.png';

const CategoryItem = (key, title) => {
  console.log(title);
  return (
    <div className='category-item col s12 m6 l4' id={key}>
      <div className='category-img'>
        <img src={img} alt='' />
      </div>
      <span className='category'>category</span>
      <h1 className='recipe-title'>hi</h1>
      <h2 className='recipe-blurb'>
        Fewer guests at the holiday table this year? Never fear! We've got a
        delicious, doable menu that's sure to delight yet won't take the whole
        day to pull together.
      </h2>
    </div>
  );
};

CategoryItem.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CategoryItem;
