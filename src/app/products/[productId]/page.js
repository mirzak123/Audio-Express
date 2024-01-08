// pages/[productId].js
import React from 'react';

const ProductDetailPage = ({ productId }) => {
  // Fetch product data based on productId
  // ...

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      {/* Display product details */}
    </div>
  );
};
//
// export async function getStaticPaths() {
//   // Fetch product IDs from your data source
//   const productIds = ['yx1']; // Replace with your actual product IDs
//
//   const paths = productIds.map((productId) => ({
//     params: { productId },
//   }));
//
//   return { paths, fallback: false };
// }
//
// export async function getStaticProps({ params }) {
//   // Fetch product data based on the product ID
//   const product = { id: params.productId, name: 'Sample Product' }; // Replace with your actual data
//
//   return {
//     props: { product },
//   };
// }

export default ProductDetailPage;
