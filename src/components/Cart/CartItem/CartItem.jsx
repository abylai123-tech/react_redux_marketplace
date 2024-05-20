import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../redux/cartSlice';

import './CartItem.css'

export const CartItem = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className='cartItem'>
      <div className='itemImg'>
        <img src={item.image} height={70} alt="Iphone" />
      </div>
      <div className='itemDetails'>
        <div className='itemName'>
          {item.title}
        </div>
        <div className='itemPrice'>
          {item.price} &#36;
        </div>
      </div>
      <button onClick={() => {dispatch(deleteItem(item.id))}}>Удалить</button>
    </div>
  )
}
