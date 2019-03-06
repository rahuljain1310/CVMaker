import React, { Component } from 'react';
import './Headline.css'
export default class Headline extends Component {
  render() {
    return (
      <div className="headline">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
