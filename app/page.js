'use client'

import React from 'react';
import { client } from '../sanity/lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import product from '@/sanity/product';

const getProducts = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query).then((products) => {
    console.log(products);
    return products;
  });
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery).then((bannerData) => {
    console.log(bannerData);
    return bannerData;
  });

  return { products, bannerData };
};

const Home = async () => {

  const { products, bannerData } = await getProducts();
  
  return (
    <div>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};


export default Home;
