import React from 'react'
import './PromotionsCard.css'
import { Button } from '../../Buy button/Button'
import { useSelector } from 'react-redux';

export const PromotionsCard = ({ productId }) => {
	const productsWithDiscount = useSelector(({productsSlice}) => productsSlice.productsWithDiscount);
  return (
    <>
		<div id='promotionCard'>
			<div id='productImg'>
				<img src={productsWithDiscount[productId].image} height={100} />
			</div>
			<div id='productName'>
				{productsWithDiscount[productId].title}
			</div>
			<div id='productPrice'>
				<span>{productsWithDiscount[productId].price - productsWithDiscount[productId].discount} &#36;</span> <span id='priceWithoutDiscount'>{productsWithDiscount[productId].price} &#36; </span>
			</div>
			<Button product={productsWithDiscount[productId]}/>
		</div>
    </>
  )
}
