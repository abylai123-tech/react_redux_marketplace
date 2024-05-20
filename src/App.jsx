import { Main } from './pages/Main.jsx'
import { Catalog } from './pages/Catalog/Catalog.jsx';
import { Cart } from './pages/Cart/Cart.jsx';

import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import { setProducts, setLoading, setError } from './redux/productsSlice'; 
import './App.css'

function App() {
  const dispatch = useDispatch();

  const products = useSelector(({productsSlice}) => productsSlice.products);

  useEffect(() => {
    dispatch(setLoading());
    fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then((json) => {
        dispatch(setProducts(json))
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }, []);
  return (
    <>
      <Routes>
        <Route path='/catalog/:category' element={<Catalog />} />
        <Route path='/cart/' element={<Cart />} />
        <Route path='/catalog/' element={<Catalog />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
