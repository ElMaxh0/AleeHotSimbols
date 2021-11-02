import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmoticonsGen from './pages/emoticons/emoticons';
import { Menu } from './components/menu/menu';
import { Copirights } from './pages/principal/Copirights/copirights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <EmoticonsGen />
      </header>
    </div>
  );
}

export default App;
