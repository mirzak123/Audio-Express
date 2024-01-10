'use client'
import { useState, useEffect } from 'react';
import { fetchProductById } from '@/utils/api';
import { AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import BackButton from '@/components/BackButton';
import QuantitySelector from '@/components/QuantitySelector';
import AddToCartButton from '@/components/AddToCartButton';
import ItemAddedPopup from '@/components/ItemAddedPopup';

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
  const [displayPopup, setDisplayPopup] = useState(false);

  function closePopup() {
    setDisplayPopup(false);
  }

  function showPopup() {
    setDisplayPopup(true);
  }

  return (
    <div className="container mx-auto">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-20 my-28 items-stretch">
        {product ?
          <>
            <Image
              className="rounded md:flex-1"
              src={`/assets/${product.imageurl}/desktop/image-product.jpg`}
              alt={product.name}
              width={600}
              height={400}
            />
            <div className="relative md:flex-1 flex flex-col justify-center md:gap-12">
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
                <AddToCartButton quantity={quantity} productId={product.productid} showPopup={showPopup} />
                <AnimatePresence>
                  { displayPopup && (
                    <ItemAddedPopup closePopup={closePopup} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
          : 'Loading...'}
      </div>
    </div>
  );
};
