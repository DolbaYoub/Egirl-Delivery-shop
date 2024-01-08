import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '../data/productsData';

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Montrez un produit à la fois
    slidesToScroll: 1,
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 5000, // Change de diapositive toutes les 5 secondes (ajustez selon vos préférences)
  };

  return (
    <Slider {...settings} className="product-carousel mb-8">
      {products.map((product) => (
        <div key={product.id} className="product-highlight p-4 bg-white bg-opacity-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full h-auto rounded-md mb-2"
              style={{ maxHeight: '150px' }}
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-bold text-gray-800">${product.price.toFixed(2)}</p>
              <a href={`/produit/${product.id}`} className="text-blue-500 hover:underline text-sm">
                Voir le produit
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
