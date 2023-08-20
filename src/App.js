import React from 'react';
import logo from './logo.png'; // Chemin vers votre logo
import SerieCard from './components/SerieCard';
import serie1Image from './images/you.jpg';
import serie2Image from './images/resident-alien.jpg';
import serie3Image from './images/moonhaven.jpg';
import serie4Image from './images/gossipgirl.jpg';
import serie5Image from './images/911.jpg';
import serie6Image from './images/911-lone-star.jpg';
import serie7Image from './images/silo.jpg';
import bannerTheIdol from './images/banner-the-idol.jpg';
import iconPlatform from './images/icon-platform.png'
import serie9Image from './images/the-crowded-room.jpg';
import serie10Image from './images/code-quantum.jpg';
import ytbIcon from './images/ytb-icon.png'
import instaIcon from './images/insta-icon.png'
import xIcon from './images/x-icon.png'
import './App.css'; // Importez le fichier CSS

const series = [
  {
    title: 'The Idol',
    text1: 'VF - HD',
    banner: bannerTheIdol,
    seasonAvailable: 'Liste des saisons disponible :',
    resume: 'Cette série est présentée Hors Compétition au Festival de Cannes 2023Suite à sa dernière tournée entachée par une dépression nerveuse, Jocelyn est déterminée à récupérer son titre de pop star la plus populaire et sexy d Amérique. Tedros, un propriétaire de boîte de nuit au passé trouble, ranime la flamme en elle. Cette nouvelle romance l’entraînera-t-elle au sommet de son art, ou la fera-t-elle basculer dans les tréfonds de son âme ?',
    btnSeason1: 'Saison 1',
    text2: 'Disponible sur Prime Vidéo (Pass Warner)',
    platformAvailable: iconPlatform,
    ytbIcon: ytbIcon,
    instaIcon: instaIcon,
    xIcon: xIcon,
    url: 'https://stream.live/#episodeTheIdols1e01'
  },
  {
    title: 'The Idol',
    text1: 'VF - HD',
    banner: bannerTheIdol,
    seasonAvailable: 'Liste des saisons disponible :',
    resume: 'Cette série est présentée Hors Compétition au Festival de Cannes 2023Suite à sa dernière tournée entachée par une dépression nerveuse, Jocelyn est déterminée à récupérer son titre de pop star la plus populaire et sexy d Amérique. Tedros, un propriétaire de boîte de nuit au passé trouble, ranime la flamme en elle. Cette nouvelle romance l’entraînera-t-elle au sommet de son art, ou la fera-t-elle basculer dans les tréfonds de son âme ?',
    btnSeason1: 'Saison 1',
    text2: 'Disponible sur Prime Vidéo (Pass Warner)',
    platformAvailable: iconPlatform,
    ytbIcon: ytbIcon,
    instaIcon: instaIcon,
    xIcon: xIcon,
    url: 'https://stream.live/#episodeTheIdols1e01'
  }
  // Ajoutez d'autres séries si nécessaire
];

const App = () => {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo de l'application" />
        <h1 className="app-name">Stream</h1>
      </div>
      <div className="banner">
        <h2 className="welcome-message">
          Bienvenue sur <span className="stream-text">Stream</span>
        </h2>
        <div className="button-container">
          <a href="https://uptobox.eu/login" target='blank' className="button">Connexion</a>
          <a href="https://uptobox.eu/register" target='blank' className="button">Inscription</a>
          <a href="https://uptobox.eu/affiliate?aff_id=20782227" target='blank' className="button">Devenir Premium</a>
        </div>
      </div>
      <div className="series-container">
        {series.map((serie, index) => (
          <SerieCard
            key={index}
            title={serie.title}
            text1={serie.text1}
            banner={serie.banner}
            resume={serie.resume}
            seasonAvailable={serie.seasonAvailable}
            btnSeason1={serie.btnSeason1}
            text2={serie.text2}
            platformAvailable={serie.platformAvailable}
            ytbIcon={serie.ytbIcon}
            instaIcon={serie.instaIcon}
            xIcon={serie.xIcon}
            url={serie.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;