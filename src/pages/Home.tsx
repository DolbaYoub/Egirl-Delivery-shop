// Home.tsx
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DiscountBanner from '../Components/DiscountBanner';
import PopupModal from '../Components/PopupModal';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';
import TopBar from '../Components/TopBar';
import SectionWithFloatingCup from '../Components/SectionWithFloatingCup';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <PopupModal isOpen={showPopup} onRequestClose={closePopup} />
      <TopBar />
      <Navbar className="navbar" />
      {showPopup && <DiscountBanner />} {/* Ajout de DiscountBanner seulement si showPopup est true */}

      <SectionWithFloatingCup
        title="Chaque pause café a sa tasse"
        description="Trouvez la tasse parfaite pour accompagner vos moments de détente."
        buttonText="Découvres la tienne !!!"
        buttonLink="/catalogue"
      />

      <div className="product-list mx-60 my-8 p-4 border rounded-md bg-white">
        <h2 className="text-2xl font-bold mb-4">Notre Catalogue</h2>
        <ProductList />
      </div>

      <Footer className="footer" />
    </>
  );
};

export default Home;
