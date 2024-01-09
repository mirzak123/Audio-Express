'use client'
import { useState, useEffect } from 'react';
import { fetchProductById } from '@/utils/api';

import Image from 'next/image';
import BackButton from '@/components/BackButton';
import QuantitySelector from '@/components/QuantitySelector';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductDetail({ params }) {
  const productId = params.productId;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(productId);
      setProduct(productData);
    }

    fetchProduct();
  }, [])

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-20 my-28">
        {product ?
          <>
            <Image
              className="rounded md:flex-1"
              src={`/assets/${product.imageurl}/desktop/image-product.jpg`}
              alt={product.name}
              width={600}
              height={400}
            />
            <div className="md:flex-1 flex flex-col md:gap-12 justify-center">
              <div className="uppercase text-5xl mb-4">
                {product.name}
              </div>
              <div className="font-normal">
                {product.description}
              </div>
              <div className="text-xl">
                $ {product.price}
              </div>
              <div className="flex gap-8">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <AddToCartButton quantity={quantity} productId={product.productid} />
              </div>
            </div>
          </>
          : 'Loading...'}
      </div>
    </div>
  );
};
