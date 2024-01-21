import React from 'react';
import { Link } from 'react-router-dom';
import Egirldeliverylogo from '../assets/logos/Egirldeliverylogo.svg';
// Assurez-vous que ces chemins d'importation sont corrects
import SearchIcon from '../assets/icons/Bouton de recherche 40 px.png';
import UserIcon from '../assets/icons/Bouton Utilisateur.png';
import CartIcon from '../assets/icons/Bouton Panier.png';
import InstagramIcon from '../assets/icons/Bouton Instagram.png';
import DeviantArtIcon from '../assets/icons/Bouton Deviant Art.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black bg-opacity-75 backdrop-blur-sm shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img src={Egirldeliverylogo} alt="Logo" className="mr-3 h-12" />
          <span className="text-2xl font-bold egirldelivery-font">EgirlDeliveryShop</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/">Choisis Une tasse</Link></li>
          <li><Link to="/create">Creer une tasse</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link to="/search"><img src={SearchIcon} alt="Search" className="h-6" /></Link>
          <Link to="/profile"><img src={UserIcon} alt="Profile" className="h-6" /></Link>
          <Link to="/cart"><img src={CartIcon} alt="Cart" className="h-6" /></Link>
          <Link to="/instagram"><img src={InstagramIcon} alt="Instagram" className="h-6" /></Link>
          <Link to="/deviantart"><img src={DeviantArtIcon} alt="DeviantArt" className="h-6" /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
