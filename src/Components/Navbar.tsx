import React from 'react';
import * as Icons from '../assets/icons';
import Egirldeliverylogo from '../assets/logos/Egirldeliverylogo.jpg';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container mx-60 flex justify-between items-center">
                {/* Logo et Nom de la Boutique */}
                <div className="flex items-center">
                    <img src={Egirldeliverylogo} alt="Logo de la Boutique" className="logo" />
                    <div className="brand-name">
                        <a href="/">EgirlDeliveryShop</a>
                    </div>
                </div>

                {/* Liens de navigation */}
                <div>
                    <ul className="flex space-x-4 flex-grow">
                        <li className="flex-grow">
                            <a href="/" className="text-white hover:text-gray-300 flex items-center justify-center h-full">
                                Choisis Une tasse
                            </a>
                        </li>
                        <li className="flex-grow">
                            <a href="/produits" className="text-white hover:text-gray-300 flex items-center justify-center h-full">
                                Creer une tasse
                            </a>
                        </li>
                    </ul>
                </div>

                {/* DeviantArt et Instagram */}
                <div className="social-icons">
                    <span className="text-white hover:text-gray-300">
                        <img src={Icons.DeviantArtIcon} alt="DeviantArt" className="icon" />
                    </span>

                    <span className="text-white hover:text-gray-300">
                        <img src={Icons.InstagramIcon} alt="Instagram" className="icon" />
                    </span>
                </div>

                <div className="mx-20 user-actions space-x-8">
    {/* Icônes à droite transformées en liste */}
    <ul className=" flex items-center space-x-4">
        <li className="text-white hover:text-gray-300">
            <img src={Icons.SearchIcon} alt="Recherche" className="icon" />
        </li>
        <li className="text-white hover:text-gray-300">
            <img src={Icons.UserIcon} alt="Utilisateur" className="icon" />
        </li>
        <li className="text-white hover:text-gray-300">
            <img src={Icons.CartIcon} alt="Panier" className="icon" />
        </li>
    </ul>
</div>
            </div>
        </nav>
    );
};

export default Navbar;
