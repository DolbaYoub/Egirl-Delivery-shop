// src/Components/ProductList.tsx
import React from 'react';
import ProductBox from './ProductBox';
import { products } from '../data/productsData';

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
