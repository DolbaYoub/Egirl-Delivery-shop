// src/Components/TopBar.tsx
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-2 flex justify-between items-center text-center">
      <div className="mx-60 flex items-center space-x-4">
        <p>
          <a href="#livraison">Envois GRATUITS*</a> | 
          <a href="#retour"> Retour sous 14 jours</a> | 
          <a href="#qualite"> Qualité garantie</a>
        </p>
      </div>
      <div className="mx-60 flex items-center space-x-4">
        <p>
          <a href="#aide">AIDE ET CONTACT</a>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
