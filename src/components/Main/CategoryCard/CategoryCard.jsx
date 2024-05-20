
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CategoryCard.css';

export const CategoryCard = ({ categoryy }) => {
  const products = useSelector(({productsSlice}) => productsSlice.products);
  const product = products.find(product => product.category === categoryy);
  console.log(categoryy);

  return (
    <>
      <div id='categoryCard'>
        <Link to={`/catalog/${product.category}`}>
          <div id='categoryImg'>
              <img src={product.image} alt='Категория' height={160} />
          </div>
          <div id='categoryName'>
              {categoryy}
          </div>
        </Link>
      </div>
    </>
  );
};

