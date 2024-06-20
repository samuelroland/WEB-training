import { useEffect, useState } from 'react';
import EmojiBlock from './components/EmojiBlock';
import { Emoji } from './types';
import EmojiList from './components/EmojiList';
import Search from './components/Search';

const API = 'http://localhost:8080';
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
}

export default App;
