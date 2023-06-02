import React from 'react';

const SerieCard = ({ title, image, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="serie-card my-custom-card" onClick={handleCardClick}>
      <img className="serie-image" src={image} alt={title} />
      <h3 className="serie-title">{title}</h3>
    </div>
  );
};

export default SerieCard;
