import React from 'react';

const EpisodeCard = ({ title, subtitle, times, cover, resume, qlt, size, linkDownload, icon, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="episode-card my-custom-card" onClick={handleCardClick}>
      <div className="container-title">
        <h3 className="episode-title">{title}</h3>
        <h4 className="episode-subtitle">{subtitle}</h4>
        <h5 className="episode-times">{times}</h5>
      </div>
      <div className="container-cover-resume">
        <img className="episode-cover" src={cover} alt={`Cover of ${title}`} />
        <p className="episode-resume">{resume}</p>
        <h5 className="episode-qlt">{qlt}</h5>
        <h5 className="episode-size">{size}</h5>
        <a className="episode-link-download" href={linkDownload}><img className="episode-icon" src={icon} alt={`Icon for ${title}`} /></a>
      </div>
    </div>
  );
};

export default EpisodeCard;
