import React from 'react';

const SerieCard = ({ title, text1, banner, resume, seasonAvailable, btnSeason1, text2, platformAvailable, ytbIcon, instaIcon, xIcon, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="serie-card my-custom-card" onClick={handleCardClick}>
      <div className="container-title">
        <h3 className="serie-title">{title}</h3>
        <h4 className="serie-text1">{text1}</h4>
      </div>
      <div className="container-banner-resume">
        <img className="serie-banner" src={banner} alt={title} />
          <div className="elements-card">
            <p className="serie-resume">{resume}</p>
            <h4 className="serie-season-available">{seasonAvailable}</h4>
            <a className="serie-btn-season-available" href="#">{btnSeason1}</a>
            <div className="container-platform-available">
              <h5 className="serie-text2">{text2}</h5>
              <img className="icon-platform-available circular-image" src={platformAvailable} alt="Platform Icon" />
            </div>  
            <div className="container-social-icon">
              <img className="serie-ytb-icon" src={ytbIcon} alt="YouTube Icon" />
              <img className="serie-insta-icon" src={instaIcon} alt="Instagram Icon" />
              <img className="serie-x-icon" src={xIcon} alt="X Icon" />
            </div>
            <span className="legal-protection-text">Texte de protection légale</span>
          </div>
      </div>
    </div>
  );
};

export default SerieCard;
