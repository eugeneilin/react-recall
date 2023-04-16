import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { item, gameOver } = this.props;

    return (
      <div id='item' className={gameOver ? 'd-none' : ''}>
        {item}
      </div>
    );
  }
}
