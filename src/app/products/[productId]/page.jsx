'use client'
// pages/[productId].js
import { useState, useEffect } from 'react';
import { fetchProductById } from '@/utils/api';

export default function ProductDetail({ params }) {
  const productId = params.productId;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(productId);
      setProduct(productData);
    }

    fetchProduct();
    console.log(product)
  }, [])

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      {/* Display product details */}
    </div>
  );
};
