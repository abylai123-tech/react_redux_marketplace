import React, { useEffect } from 'react';

import { Header } from '../../components/Main/Header/Header'

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory, setProducts } from "../../redux/productsSlice.js";
import { ProductCard } from '../../components/Catalog/ProductCard.jsx';

import './Catalog.css'

export const Catalog = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(({ productsSlice }) => productsSlice.products);
    const filteredProducts = useSelector(({ productsSlice }) => productsSlice.filteredProducts);

    useEffect(() => {
        if (category) {
            dispatch(filterProductsByCategory(category));
        } else {
            dispatch(setProducts(products));
        }
    }, [category, dispatch, products]);

    return (
        <>
            <Header />
            <div id="catalog">
                <h1>Каталог</h1>
                <div id="catalogCards">
                    {filteredProducts.length ? (
                        filteredProducts.map((product, index) => <ProductCard key={product.id} productId={index} />)
                        ) : (
                            <p className="empty-description">В данном разделе пока нет продуктов</p>
                        )
                    }
                </div>
            </div>
        </>
    );
};                                                                                                                              