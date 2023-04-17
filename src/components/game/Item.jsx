import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { item, gameOver, resetScore } = this.props;

    return (
      <>
        <div id='item' className={gameOver ? 'd-none' : ''}>
          {item}
        </div>
        <div id='reset-score-wrapper'>
          <button
            id='reset-score'
            onClick={() => {
              resetScore();
            }}
            className={!gameOver ? '' : 'd-none'}
          >
            Reset Score
          </button>
        </div>
      </>
    );
  }
}
