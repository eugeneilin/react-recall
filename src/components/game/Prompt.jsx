import React, { Component } from 'react';

export default class Prompt extends Component {
  render() {
    // const { item } = this.props;

    return (
      <div id='prompt'>
        <h2>Have you seen this before?</h2>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
}
