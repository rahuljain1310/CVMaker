import React, { Component } from 'react';
import logo from './logo.svg';
import EditResume from './EditResume'
import ScreenResume from './ScreenResume'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let x = [
      {Title: "Ttiel1",Description: "Description"},
      {Title: "Ttiel2",Description: "Description"}
    ]
    this.state = {
      CVPoints : {AcademicDetails: x},
    }
  }

  updateCV = (object) => {
    this.setState({CVPoints: object})
  }

  render() {
    console.log(this.state.CVPoints)
    return (
      <div className="resume-maker-container">
        <EditResume EditDetails={this.state.CVPoints} updateCV={this.updateCV}/>
        <ScreenResume CVSections={this.state.CVPoints}/>
      </div>
    );
  }
}

export default App;
