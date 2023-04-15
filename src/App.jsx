import React, { Component } from 'react';
import Header from './components/Header';
import Game from './components/game/Game.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Game />
        <Footer />
      </>
    );
  }
}

export default App;
