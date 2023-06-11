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
import serie8Image from './images/the-idol.jpg';
import serie9Image from './images/the-crowded-room.jpg';
import serie10Image from './images/code-quantum.jpg';
import './App.css'; // Importez le fichier CSS

const series = [
  {
    title: 'Code Quantum (2022)',
    image: serie10Image,
    url: 'https://t.me/c/1807130301/184'
  },
  {
    title: 'The Crowded Room',
    image: serie9Image,
    url: 'https://t.me/c/1807130301/177'
  },
  {
    title: 'The Idol',
    image: serie8Image,
    url: 'https://t.me/c/1807130301/136'
  },
  {
    title: 'Silo',
    image: serie7Image,
    url: 'https://t.me/c/1807130301/107'
  },
  {
    title: 'Moonhaven',
    image: serie3Image,
    url: 'https://t.me/c/1807130301/115'
  },
  {
    title: 'You',
    image: serie1Image,
    url: 'https://t.me/c/1807130301/95'
  },
  {
    title: 'Resident alien',
    image: serie2Image,
    url: 'https://t.me/c/1807130301/76'
  },
  {
    title: 'Gossip Girl (2007)',
    image: serie4Image,
    url: 'https://t.me/c/1807130301/?'
  },
  {
    title: '911',
    image: serie5Image,
    url: 'https://t.me/c/1807130301/?'
  },
  {
    title: '911 : Lone star',
    image: serie6Image,
    url: 'https://t.me/c/1807130301/123'
  },
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
          Bienvenue sur <span className="stream-text">DODO</span>
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
            image={serie.image}
            url={serie.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;