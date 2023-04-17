import React, { Component } from 'react';
import Header from './components/Header';
import Game from './components/game/Game.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameStarted: false,
    };
  }

  startGame() {
    this.setState({
      gameStarted: true,
    });
  }

  render() {
    return (
      <>
        {!this.state.gameStarted ? (
          <div className='container' id='game-intro'>
            <h1>
              Welcome to
              <strong>
                <span>React</span>Recall
              </strong>
              Memory Game!
            </h1>
            <p>Have a great memory?</p>
            <h3>Let's see!</h3>
            <button
              onClick={() => {
                this.startGame();
              }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            <Header />
            <Game />
          </>
        )}
      </>
    );
  }
}

export default App;
