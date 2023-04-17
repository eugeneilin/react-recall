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
      topScore: Number(localStorage.getItem('Top Score')) || 0,
      items,
      gameOver: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  randItemIndex() {
    const rand = Math.floor(Math.random() * this.state.items.length);
    return rand;
  }

  // new index is generated....
  // when mounts
  // then when randomIndex is called
  // also in handleAnswer

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
      const topScore =
        this.state.currentScore > this.state.topScore
          ? this.state.currentScore
          : this.state.topScore;
      const items = this.state.items.map((i) => {
        i.displayed = false;
        return i;
      });

      this.setState(
        {
          topScore: topScore,

          items: items,
          gameOver: true,
        },
        () => {
          localStorage.setItem('Top Score', this.state.topScore);
        }
      );
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
    localStorage.setItem('Top Score', 0);
    this.setState({
      currentScore: 0,
      topScore: 0,
    });
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
