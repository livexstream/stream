import React, { useState, useEffect } from 'react';
import logo from './logo.png'; // Chemin vers votre logo
import SerieCard from './components/SerieCard';
import serie1Image from './images/you.jpg';
import serie2Image from './images/resident-alien.jpg';
import serie3Image from './images/moonhaven.jpg';
import serie4Image from './images/gossipgirl.jpg';
import serie5Image from './images/911.jpg';
import serie6Image from './images/911-lone-star.jpg';
import './App.css'; // Importez le fichier CSS

const series = [
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
    title: 'Moonhaven',
    image: serie3Image,
    url: 'https://t.me/c/1807130301/?'
  },
  {
    title: 'Gossip Girl',
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
    url: 'https://t.me/c/1807130301/?'
  },
  // Ajoutez d'autres séries si nécessaire
];

const App = () => {
  const [showAddToHomeScreen, setShowAddToHomeScreen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setShowAddToHomeScreen(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAddToHomeScreen = () => {
    const promptEvent = new Event('beforeinstallprompt');
    window.dispatchEvent(promptEvent);
  };

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
        {showAddToHomeScreen && (
          <button onClick={handleAddToHomeScreen} className="add-to-home-screen-button">
            Ajouter à l'écran d'accueil
          </button>
        )}
        <div className="button-container">
          <a href="https://uptobox.eu/login" target="_blank" rel="noopener noreferrer" className="button">
            Connexion
          </a>
          <a href="https://uptobox.eu/register" target="_blank" rel="noopener noreferrer" className="button">
            Inscription
          </a>
          <a href="https://uptobox.com/affiliate?aff_id=20782227" target="_blank" rel="noopener noreferrer" className="button">
            Devenir Premium
          </a>
        </div>
      </div>
      <div className="series-container">
        {series.map((serie, index) => (
          <SerieCard key={index} title={serie.title} image={serie.image} url={serie.url} />
        ))}
      </div>
    </div>
  );
};

export default App;
