import React, { Component } from 'react';
import ToggleBar from './Components/ToggleBar'
import Headline from './Components/Headline'
class AcademicDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false,
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Academic Details" toggle={()=>this.setState({show: !this.state.show})}/>
                { this.state.show && <Headline/> }
            </div>
        )
    }
}
class CoursesDone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false,
            coursesdone: "",
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Courses Done" toggle={()=>this.setState({show: !this.state.show})}/>
                <textarea value={this.state.coursesdone} onChange={()=>this.setState({show: !this.state.coursesdone})}></textarea>
            </div>
        )
    }
}
export default class EditResume extends Component {
  render() {
    return (
      <div className="resume-edit">
        <AcademicDetails/>
        {/* <ScholasticAchievements/> */}
        <CoursesDone/>
        {/* <Internships/>
        <Projects/>
        <TechnicalSkills/>
        <PositionResponsibilty/>
        <ExtraCurricularActivities/> */}
      </div>
    );
  }
}