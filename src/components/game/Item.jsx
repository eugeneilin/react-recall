import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { items } = this.props;

    return <div id='item'>{items}</div>;
  }
}
