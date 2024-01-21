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
import CustomOrderForm from '../Components/CustomOrderForm';

ReactModal.setAppElement('#root');

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const response = await fetch('http://localhost:3001/submit-design', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Design soumis avec succès!');
      } else {
        throw new Error('Problème lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la soumission du design.');
    }
  };

  return (
    <>
      <PopupModal isOpen={showPopup} onRequestClose={closePopup} />
      <TopBar />
      <Navbar className="navbar " />
      {showPopup && <DiscountBanner />} {/* Ajout de DiscountBanner seulement si showPopup est true */}

      <SectionWithFloatingCup
        title="Chaque pause café a sa tasse"
        description="Trouvez la tasse parfaite pour accompagner vos moments de détente."
        buttonText="Découvres la tienne !!!"
        buttonLink="/catalogue"
      />

      <section className="py-12 ">
        <h2 className="text-3xl font-bold text-center mb-4 ">Demande de Design Personnalisé</h2>
        <CustomOrderForm onFormSubmit={handleFormSubmit} />
      </section>

      <div className="product-list mx-60 my-8 p-4 border rounded-md bg-white">
        <h2 className="text-2xl font-bold mb-4">Notre Catalogue</h2>
        <ProductList />
      </div>

      <Footer className="footer" />
    </>
  );
};

export default Home;
