import React from 'react';
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
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo de l'application" />
      </div>
      {series.map((serie, index) => (
        <SerieCard
          key={index}
          title={serie.title}
          image={serie.image}
          url={serie.url}
        />
      ))}
    </div>
  );
};

export default App;