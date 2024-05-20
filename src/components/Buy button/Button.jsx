import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../redux/cartSlice.js'; 
import './Button.css'

export const Button = ({product}) => {
  console.log(product);
  const dispatch = useDispatch();
  return (
    <>
        <button onClick={() => {dispatch(addToCart(product))}}>В корзину</button>
    </>
  )
}
