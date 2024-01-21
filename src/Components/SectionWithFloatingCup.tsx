import React from 'react';
import { Link } from 'react-router-dom';

interface SectionWithFloatingCupProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const SectionWithFloatingCup: React.FC<SectionWithFloatingCupProps> = ({ title, description, buttonText, buttonLink }) => {
  // Style pour le background image
  const sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='section-container mx-60 my-2 p-2 flex justify-end items-center custom-section-style' style={sectionStyle}>
      {/* Côté droit pour le texte */}
      <div className="text-right">
        <h2 className="text-4xl font-bold text-white mb-4 custom-title-style">{title}</h2>
        <p className="text-lg mb-6 text-white custom-description-style">{description}</p>
        <Link to={buttonLink} className="btn-primary custom-button-style">{buttonText}</Link>
      </div>
    </div>
  );
};
  


export default SectionWithFloatingCup;
