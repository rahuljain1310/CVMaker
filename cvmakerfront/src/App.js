import React, { Component } from 'react';
import logo from './logo.svg';
import EditResume from './EditResume'
import ScreenResume from './ScreenResume'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resume-container">
        <EditResume/>
        <ScreenResume/>
      </div>
    );
  }
}

export default App;
