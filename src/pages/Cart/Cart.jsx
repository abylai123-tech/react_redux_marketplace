import React, { useEffect } from 'react';

import { Header } from '../../components/Main/Header/Header'

import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/Cart/CartItem/CartItem';


import './Cart.css'

export const Cart = () => {
    const items = useSelector(({ cartSlice }) => cartSlice.cartItems);
    console.log(items);
    return (
        <>
            <Header />
            <div id="cart">
                <h1>Корзина</h1>
                <div id="cartItems">
                    {items.length ? (
                        items.map((item) => <CartItem key={item.id} item={item} />)
                        ) : (
                            <p className="empty-description">В данном разделе пока нет продуктов</p>
                        )
                    }
                </div>
            </div>
        </>
    );
};                                                                                                                              