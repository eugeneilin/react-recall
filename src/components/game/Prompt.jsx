import React, { Component } from 'react';
import Footer from '../Footer';

export default class Prompt extends Component {
  render() {
    const { item, handleAnswer, handlePlayAgain, index, gameOver, resetScore } = this.props;

    return (
      <div id='prompt'>
        {gameOver ? (
          <>
            <button
              id='game-over-reset-score'
              onClick={() => {
                resetScore();
              }}
            >
              Reset Score
            </button>
            <h2 id='game-over'>Game Over!</h2>
            <button
              onClick={() => {
                handlePlayAgain();
              }}
            >
              Play again
            </button>
            <Footer />
          </>
        ) : (
          <div>
            <h3>Have you seen this letter before?</h3>
            <div>
              <button
                onClick={(e) => {
                  handleAnswer(e, item, index, true);
                }}
              >
                Yes
              </button>
              <button
                onClick={(e) => {
                  handleAnswer(e, item, index, false);
                }}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
