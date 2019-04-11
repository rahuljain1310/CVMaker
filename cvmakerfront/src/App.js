import React, { Component } from 'react';
import EditResume from './EditResume'
import ScreenResume from './ScreenResume'
import './App.css';

class Options extends Component {
  constructor(props) {
      super(props)
      this.state = {
        NewSection:""
      }
  }
  addNewSection = () => {
    this.props.addSection(this.state.NewSection)
    this.setState({NewSection: ""})
  }
  render() {
      return (
        <div className="button-area">
          <input onChange={(e)=>this.setState({NewSection: e.target.value})} value={this.state.NewSection}></input>
				  <button onClick={() => this.addNewSection()}>Add New Section</button>
				  <br/>
				  <button onClick={() => this.props.uploadCV()}>Save CV</button>
			  </div>
      )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CVPoints : {
        PersonalDetails: {
          Name: "",
          Contact:"",
          Email:"",
        },
        AcademicDetails: [],
        ScholasticAchievements: [],
        TechnicalSkills: [],
        Courses : "",
        Projects: [],
        Internships: [],
        POR: [],
        ExtraCurricularActivities: [],
        Certification: [],
        WorkEx: [],
        ProfessionalSummary: "",
        ExtraPoints: {},
      },
    }
  }

  uploadCV = () => {

  }

  updateCV = (object) => {
    this.setState({CVPoints: object})
  }

  addSection = (text) => {
    let newextrapoints = this.state.CVPoints.ExtraPoints
    newextrapoints[text] = [] 
    this.setState({ExtraPoints:newextrapoints})
  }

  render() {
    return (
      <div className="resume-maker-container">
        <EditResume details={this.state.CVPoints} updateCV={this.updateCV} />
        <Options uploadCV={this.uploadCV} addSection={this.addSection}/>
        <ScreenResume CVSections={this.state.CVPoints}/>
      </div>
    );
  }
}

export default App;
