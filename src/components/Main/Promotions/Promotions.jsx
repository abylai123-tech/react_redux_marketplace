import React, { useEffect, useState } from 'react';
import { PromotionsCard } from '../Promotions card/PromotionsCard';
import { useSelector, useDispatch } from 'react-redux';
import { setProductsWithDiscount } from '../../../redux/productsSlice';
import './Promotions.css';

export const Promotions = () => {
  const dispatch = useDispatch();
  dispatch(setProductsWithDiscount())
  const productsWithDiscount = useSelector(({productsSlice}) => productsSlice.productsWithDiscount);

  return (
    <>
      <div id="promotions">
        <h1>Акции</h1>
        <div id="promotionCards">
          {productsWithDiscount.length ? (
            productsWithDiscount.map((elem, index) => <PromotionsCard key={elem.id} productId={index} />)
          ) : (
            <p className="empty-description">В данном разделе пока нет продуктов</p>
          )}
        </div>
      </div>
    </>
  );
};
