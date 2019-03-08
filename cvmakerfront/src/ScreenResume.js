import React, { Component } from 'react';
import Headline from './Components/Headline'
import ListTitleDescription from './Components/ListTitleDescription'
import DisplaySection from './Components/DisplaySection';
import Details from './Components/Details'

export default class ScreenResume extends Component {
  render() {
    return (
      <div className="resume-screen">
        <Details name="Rahul JAin"/>
        <DisplaySection section="Academic Details" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection type={3} section="Courses" points={this.props.CVSections.Courses}/>
        <DisplaySection type={1} section="Scholastic Achievements" points={this.props.CVSections.ScholasticAchievements}/>
        <DisplaySection type={2} section="Projects" points={this.props.CVSections.Projects}/>
        <DisplaySection type={2} section="Internships" points={this.props.CVSections.Internships}/>
        <DisplaySection type={1} section="Technical Skills" points={this.props.CVSections.TechnicalSkills}/>
        <DisplaySection type={2} section="Position of Responsibility" points={this.props.CVSections.POR}/>
        <DisplaySection type={1} section="Extra Curricular Activities" points={this.props.CVSections.ExtraCurricularActivities}/>
      </div>
    );
  }
}
