import React from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard.jsx';

import { useSelector } from 'react-redux';

import './Categories.css';

export const Categories = ({ }) => {
  const categories = useSelector(({productsSlice}) => productsSlice.categories);

  return (
    <>
      <div id='categories'>
        <h1>Категории</h1>
        <div id='categoryCards'>

        {categories.map((category, index) => (
          <CategoryCard key={index} categoryy={category}/>
        ))}
        </div>
      </div>
    </>
  );
};