import React, { Component } from 'react';
import logo from './logo.svg';
import EditResume from './EditResume'
import ScreenResume from './ScreenResume'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CVPoints : {
        AcademicDetails: [],
        ScholasticAchievements: [],
        TechnicalSkills: [],
        Courses : "",
        Projects: [],
        Internships: [],
        POR: [],
        AcademicDetails: [],
        ExtraCurricularActivities: [],
        Certification: [],
        WorkEx: [],
        ProfessionalSummary: "",
      }
    }
  }

  updateCV = (object) => {
    this.setState({CVPoints: object})
  }

  render() {
    return (
      <div className="resume-maker-container">
        <EditResume EditDetails={this.state.CVPoints} updateCV={this.updateCV} state={this.state}/>
        <ScreenResume CVSections={this.state.CVPoints}/>
      </div>
    );
  }
}

export default App;
