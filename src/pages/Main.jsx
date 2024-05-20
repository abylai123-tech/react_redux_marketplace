import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../components/Main/Header/Header'
import { Banner } from '../components/Main/Banner/Banner'
import { Categories } from '../components/Main/Categories/Categories'
import { Promotions } from '../components/Main/Promotions/Promotions'


export const Main = () => {
  const products = useSelector(({productsSlice}) => productsSlice.products);
  const status = useSelector(({productsSlice}) => productsSlice.status);
  const error = useSelector(({productsSlice}) => productsSlice.error);
  
  if (status === 'loading' || !products) {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if( status === 'success'){
    return (
      <>
        <Header />
        <Banner />
        <Categories/>
        <Promotions/>
      </>
    )
  }
}
