import React, { Component } from 'react';

export default class Scoreboard extends Component {
  render() {
    const { currentScore, topScore } = this.props;

    return (
      <div id='scoreboard'>
        <div>
          <p>Current Score</p>
          <p>{currentScore}</p>
        </div>
        <div>
          <p>Top Score</p>
          <p>{topScore}</p>
        </div>
      </div>
    );
  }
}
