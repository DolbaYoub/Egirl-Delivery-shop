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
    <div className="border p-4 flex flex-col items-center rounded-lg shadow-lg transition-transform transform hover:scale-110 bg-white hover:shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-full h-auto rounded-t-lg"
        style={{ maxHeight: '200px' }}
      />
      <div className="pt-2 pb-4 px-4 flex flex-col items-center">
        <h3 className="text-lg font-bold mb-2">{product.title}</h3>
        <p className="text-sm text-gray-700 mb-3">{product.description}</p>
        <span className="text-md font-semibold text-gray-800">${product.price.toFixed(2)}</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-sm w-full transition-colors">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductBox;
