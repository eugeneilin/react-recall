import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='container'>
        <h1>
          <strong>
            <span>React</span>Recall
          </strong>
        </h1>
        <p>Let's test your memory!</p>
      </header>
    );
  }
}
