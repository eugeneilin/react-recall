import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Prompt from './Prompt';
import Item from './Item';
import './game.css';

const items = [];

for (let i = 65; i <= 90; i++) {
  items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  });
}

export default class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      topScore: localStorage.getItem('Top Score') || 0,
      items,
      gameOver: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  randItemIndex() {
    let rand = Math.floor(Math.random() * this.state.items.length);
    return rand;
  }

  handleAnswer(e, item, index, answer) {
    this.handleScore(item.displayed === answer);

    const items = this.state.items.map((i) => {
      if (i === item) {
        i.displayed = true;
        return i;
      } else {
        return i;
      }
    });

    this.setState({ items });
  }

  handleScore(increment) {
    if (increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
    } else {
      console.log('Current Score: ' + this.state.currentScore);
      console.log('Top Score before setState: ' + this.state.topScore);
      this.setState({
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : this.state.topScore,
        items: this.state.items.map((i) => {
          i.displayed = false;
          return i;
        }),
        gameOver: true,
      });
      localStorage.setItem('Top Score', this.state.currentScore); // currentScore is the new topScore ?
      console.log('Top Score: ' + this.state.currentScore);
    }
  }

  handlePlayAgain() {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      items: this.state.items.map((i) => {
        i.displayed = false;
        return i;
      }),
      gameOver: false,
    });
  }

  resetScore() {
    this.setState({
      currentScore: 0,
      topScore: 0,
    });
    localStorage.setItem('Top Score', 0); // Why is this rerendering the Item component?
  }

  render() {
    const { currentScore, topScore, items, gameOver } = this.state;
    const index = this.randItemIndex();
    const item = items[index];

    return (
      <main className='container'>
        <Scoreboard currentScore={currentScore} topScore={topScore} />
        <Prompt
          gameOver={gameOver}
          item={item}
          handleAnswer={this.handleAnswer}
          handlePlayAgain={this.handlePlayAgain}
          index={index}
          resetScore={this.resetScore}
        />
        <Item id={index} item={item.content} gameOver={gameOver} resetScore={this.resetScore} />
      </main>
    );
  }
}
