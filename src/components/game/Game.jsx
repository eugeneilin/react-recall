import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Prompt from './Prompt';
import Item from './Item';
import './game.css';

const items = [];

for (let i = 65; i < 75; i++) {
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
      topScore: 0,
      items,
      gameOver: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
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
      this.setState({
        currentScore: 0,
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
        />
        <Item id={index} item={item.content} gameOver={gameOver} />
      </main>
    );
  }
}
