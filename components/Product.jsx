import React from 'react';
import Link from 'next/link';
import { urlFor } from '../sanity/lib/client';
import product from '@/sanity/product';

const Product = ({ product: { image, title, slug, price } }) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product