import React, { Component } from 'react';
import logo from './logo.svg';
import EditResume from './EditResume'
import ScreenResume from './ScreenResume'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let x = [
      {title: "Ttiel1",description: "description"},
      {title: "Ttiel2",description: "description"}
    ]
    this.state = {
      CVPoints : {
        AcademicDetails: x,
        TechnicalSkills: x,
        Courses: "",
        ExtraCurricularActivities: x.concat(x),
        ScholasticAchievements: x.concat(x),
      }
    }
  }

  updateCV = (object) => {
    this.setState({CVPoints: object})
  }

  render() {
    return (
      <div className="resume-maker-container">
        <EditResume EditDetails={this.state.CVPoints} updateCV={this.updateCV}/>
        <ScreenResume CVSections={this.state.CVPoints}/>
      </div>
    );
  }
}

export default App;
