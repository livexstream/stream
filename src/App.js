import React from 'react';
import logo from './logo.png'; // Chemin vers votre logo
//import SerieCard from './components/SerieCard';
import EpisodeCard from './components/EpisodeCard';
import bannerTheIdol from './images/banner-the-idol.jpg';
import cover1x04theIdol from './images/cover-1x04-theIdol.jpg'
import cover1x03theIdol from './images/cover-1x03-theIdol.jpg'
import iconPlatform from './images/icon-platform.png'
import iconDownload from './images/icon-download.png'
import ytbIcon from './images/ytb-icon.png'
import instaIcon from './images/insta-icon.png'
import xIcon from './images/x-icon.png'
import './App.css'; // Importez le fichier CSS

{/*const series = [
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
    url: 'https://t.me/c/1807130301/138'
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
    url: 'https://t.me/c/1807130301/138'
  }
  // Ajoutez d'autres séries si nécessaire
];*/}

const episodes = [
  {
    title: 'The Idol - Saison 1',
    subtitle: 'Episode 4 - Les étoiles appartiennent au monde',
    times: '(59 mn)',
    cover: cover1x04theIdol,
    resume: 'Tout en luttant pour le dessus dans sa relation avec Tedros, Jocelyn devient déterminée à présenter son nouveau personnage au monde. Plus tard, l équipe de Jocelyn discute de son implication croissante avec Tedros et son entourage.',
    qlt: 'Blu-ray (1080p)',
    size: '3.96 Go',
    icon: iconDownload,
    url: 'https://uptobox.eu/6dkig1y1m1mk'
  },
  {
    title: 'The Idol - Saison 1',
    subtitle: 'Episode 3 - Aube',
    times: '(45 mn)',
    cover: cover1x03theIdol,
    resume: 'Alors que Tedros s insère dans la vie de Jocelyn en offrant des commentaires sur sa garde-robe et ses collaborateurs, Leia fait part de ses préoccupations croissantes à Chaim et Destiny.',
    qlt: 'Blu-ray (1080p)',
    size: '3.73 Go',
    icon: iconDownload,
    url: 'https://uptobox.eu/2mq0yo5w0fbc'
  }
  // Ajoutez d'autres épisodes si nécessaire
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
      {/*<div className="series-container">
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
      </div>*/}
      <div className="episode-container">
        {episodes.map((episode, index) => (
          <EpisodeCard
            key={index}
            title={episode.title}
            subtitle={episode.subtitle}
            times={episode.times}
            cover={episode.cover}
            resume={episode.resume}
            qlt={episode.qlt}
            size={episode.size}
            linkDownload={episode.linkDownload}
            icon={episode.icon}
            url={episode.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;