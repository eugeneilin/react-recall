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
    };
  }

  randItemIndex() {
    let rand = Math.floor(Math.random() * this.state.items.length);
    return rand;
  }

  handleAnswer(e, index, answer) {
    // Compare item.displayed to answer
    this.props.handleScore(this.state.items[index].displayed === answer);

    // Change the item that is displayed
    // If the displayed item hasn't been displayed before, change displayed property to true
    if (!this.state.items[index].displayed) {
      const items = this.state.items.map((item) => {
        if (item.displayed) {
          return item;
        } else {
          item.displayed = true;
          return item;
        }
      });
      this.setState({ items });
    }
  }

  handleScore(increment) {
    if (increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
    } else {
      this.setState({
        currentScore: 0,
      });
    }
  }

  render() {
    const { currentScore, topScore, items } = this.state;
    const index = this.randItemIndex();
    const item = items[index];

    return (
      <main className='container'>
        <Scoreboard currentScore={currentScore} topScore={topScore} />
        <Prompt item={item} handleAnswer={this.handleAnswer} index={index} />
        <Item id={index} items={item.content} />
      </main>
    );
  }
}
