import React, { Component } from 'react';

export default class Prompt extends Component {
  render() {
    const { item, handleAnswer, handlePlayAgain, index, gameOver } = this.props;

    return (
      <div id='prompt'>
        {gameOver ? (
          <div>
            <h2 id='game-over'>Game Over!</h2>
            <button
              onClick={() => {
                handlePlayAgain();
              }}
            >
              Play again
            </button>
          </div>
        ) : (
          <div>
            <h2>Have you seen this before?</h2>
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
