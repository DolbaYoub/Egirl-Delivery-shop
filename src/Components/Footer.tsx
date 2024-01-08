// src/Components/Footer.tsx
import React from 'react';
import * as Icons from '../assets/icons';

const Footer: React.FC = () => {
  return (
    <nav className="footer">

    <footer className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo et Nom de la Boutique */}
        <div className="flex items-center">
          {/* Vous pouvez remplacer cela par le vrai logo de votre boutique */}
          <div className="text-white text-lg font-bold">
            <a href="/">EgirlDeliveryShop</a>
          </div>
        </div>

        {/* Liens du Footer */}
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">Accueil</a>
          </li>
          <li>
            <a href="/produits" className="hover:text-gray-300">Produits</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>

        {/* Icônes de Réseaux Sociaux */}
        <div className="flex items-center space-x-4">
          <span className="text-white hover:text-gray-300">
            <img src={Icons.InstagramIcon} alt="Instagram" className="h-6 w-6" />
          </span>
          <span className="text-white hover:text-gray-300">
            <img src={Icons.DeviantArtIcon} alt="DeviantArt" className="h-6 w-6" />
          </span>
        </div>
      </div>
    </footer>
    </nav>

  );
};

export default Footer;
