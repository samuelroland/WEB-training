import { useEffect, useState } from 'react';
import { Emoji } from './types';
import EmojiList from './components/EmojiList';
import Search from './components/Search';
import EmojiImage from './components/EmojiImage';

// Constantes utiles
const BACKEND = 'http://localhost:8080'; //le lien du backend à prefixer avant les requêtes fetch
const LIMITS: number[] = [10, 20, 50, 100]; //toutes les valeurs des limites à afficher sous forme de boutons

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
    // TODO: gérer les variables "réactives" pour l'état de chargement, la liste des emojis affichées, la limite choisie (une parmi LIMITS)
    // evtl la recherche actuelle et l'emoji aléatoire (affiché à gauche du titre)
}

export default App;
