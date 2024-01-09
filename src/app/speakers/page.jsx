'use client'

import CategoriesList from "@/components/CategoriesList";
import PageHeader from "@/components/PageHeader";

import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "@/utils/api.js"
import { getProductSections } from "@/utils/helpers.js"

export default function Speakers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetchProductsByCategory("speakers");
      setProducts(productsData);
    }

    fetchProducts();
  }, [])

  const productsList = getProductSections(products);

  return (
    <div>
      <PageHeader title="Speakers" />
      <div className="container mx-auto flex flex-col gap-28 my-28">
        {productsList}
        <CategoriesList />
      </div>
    </div>
  );
}
