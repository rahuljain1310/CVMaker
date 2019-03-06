import React, { Component } from 'react';
export default class ToggleBar extends Component {
  render() {
    return (
      <div className="toggle-bar">
          <button onClick={this.props.toggle}>{this.props.show ? "Hide" : "Show"}</button> {this.props.text} 
      </div>
    );
  }
}
