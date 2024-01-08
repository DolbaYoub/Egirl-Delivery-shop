// DiscountBanner.tsx
import React from 'react';

const DiscountBanner: React.FC = () => {
  return (
    <div className='discount-banner'>
      <div className='discount-content'>
        <p className='discount-description'>
          Réduction spéciale ! Profitez de notre offre spéciale avec le code de réduction :
          <span className='discount-percentage'> -20% </span>
          <span className='discount-code-text'> CODE: REDUC20 </span>
        </p>
        <a href='#' className='btn-primary'>Découvrez nos produits</a>
      </div>
    </div>
  );
};

export default DiscountBanner;
 