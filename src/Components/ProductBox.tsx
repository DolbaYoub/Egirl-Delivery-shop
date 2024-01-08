// src/Components/ProductBox.tsx
import React from 'react';

interface ProductBoxProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductBox: React.FC<ProductBoxProps> = ({ product }) => {
  return (
    <div className="border p-2 flex flex-col items-center rounded-md shadow-md transition-transform transform hover:scale-105 bg-white bg-opacity-80">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-full h-auto rounded-md mb-1"
        style={{ maxHeight: '150px' }}
      />
      <h3 className="text-base font-semibold mb-1">{product.title}</h3>
      <p className="text-gray-600 mb-1">{product.description}</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm font-bold text-gray-800">${product.price.toFixed(2)}</p>
        <button className="bg-pink-500 text-white px-2 py-1 rounded-full hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300 text-xs">
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
