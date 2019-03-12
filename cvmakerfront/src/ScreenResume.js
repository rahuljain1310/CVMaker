import React, { Component } from 'react';
import Headline from './Components/Headline'
import ListTitleDescription from './Components/ListTitleDescription'
import DisplaySection from './Components/DisplaySection';
import Details from './Components/Details'

export default class ScreenResume extends Component {
  render() {
    let data = this.props.CVSections
    return (
      <div className="resume-screen">
        <Details name="Rahul Jain"/>
        <DisplaySection type={4} section="Professional Summary" points={data.ProfessionalSummary} />
        <DisplaySection type={5} section="Academic Details" points={data.AcademicDetails}/>
        <DisplaySection type={4} section="Courses" points={data.Courses}/>
        <DisplaySection type={1} section="Scholastic Achievements" points={data.ScholasticAchievements}/>
        <DisplaySection type={2} section="WorkExperience" points={data.WorkEx}/>
        <DisplaySection type={3} section="Projects" points={data.Projects}/>
        <DisplaySection type={2} section="Internships" points={data.Internships}/>
        <DisplaySection type={1} section="Technical Skills" points={data.TechnicalSkills}/>
        <DisplaySection type={2} section="Position of Responsibility" points={data.POR}/>
        <DisplaySection type={1} section="Extra Curricular Activities" points={data.ExtraCurricularActivities}/>
        <DisplaySection type={1} section="Certification" points={data.Certification}/>
      </div>
    );
  }
}
