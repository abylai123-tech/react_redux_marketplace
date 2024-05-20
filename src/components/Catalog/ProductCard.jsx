import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './ProductCard.css'

import { Button } from '../Buy button/Button'

export const ProductCard = ({ productId }) => {
	const filteredProducts = useSelector(({ productsSlice }) => productsSlice.filteredProducts);
  return (
    <>
		<div id='productCard'>
			<div id='productImg'>
				<img src={filteredProducts[productId].image} height={100} />
			</div>
			<div id='productName'>
				{filteredProducts[productId].title}
			</div>
			<div id='productPrice'>
                <span id='productPrice'>{filteredProducts[productId].price} &#36; </span>
			</div>
			<Button product={filteredProducts[productId]}/>
		</div>
    </>
  )
}
