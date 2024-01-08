// PopupModal.tsx
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface PopupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onRequestClose }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setClosed(true);
        setTimeout(() => {
          onRequestClose();
          setClosed(false);
        }, 300);
      }, 5000); // Fermer automatiquement après 5000 millisecondes (5 secondes)
    }
  }, [isOpen, onRequestClose]);

  const handleClose = () => {
    setClosed(true);
    setTimeout(() => {
      onRequestClose();
      setClosed(false);
    }, 300);
  };

  const customStyles = {
    content: {
      position: closed ? 'fixed' : 'absolute',
      top: closed ? 'auto' : '50%',
      left: closed ? 'auto' : '50%',
      right: closed ? '20px' : 'auto',
      bottom: closed ? '20px' : 'auto',
      transform: closed ? 'none' : 'translate(-50%, -50%)',
      maxWidth: '300px',
      width: '100%',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease-in-out, right 0.3s ease-in-out, bottom 0.3s ease-in-out',
    },
    overlay: {
      backgroundColor: closed ? 'transparent' : 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease-in-out',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Popup Modal"
      ariaHideApp={false}
    >
      <div className="popup-content">
        <h2>Réduction spéciale !</h2>
        <p>Profitez de notre offre spéciale avec le code de réduction :</p>
        <div className="discount-code">
          <span className="discount-percentage">-20%</span>
          <span className="discount-code-text">CODE: REDUC20</span>
        </div>
        <a href="#" className="btn-primary" onClick={handleClose}>
          Découvrez nos produits
        </a>
      </div>
    </ReactModal>
  );
};

export default PopupModal;
