'use client'

import PageHeader from '@/components/PageHeader';
import CategoriesList from '@/components/CategoriesList';

import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '@/utils/api';
import { getProductSections } from '@/utils/helpers';

export default function Earphones() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetchProductsByCategory('earphones');
      setProducts(productsData);
    }

    fetchProducts();
  }, [])

  const productsList = getProductSections(products);
  return (
    <div>
      <PageHeader title="Earphones" />
      <div className="container mx-auto flex flex-col gap-28 my-28">
        {productsList}
        <CategoriesList />
      </div>
    </div>
  );
}
