import React, { Component } from 'react';
import DisplaySection from './Components/DisplaySection';
import Details from './Components/Details'

export default class ScreenResume extends Component {
  render() {
    let data = this.props.CVSections
    let additional_points = Object.keys(data.ExtraPoints)
    return (
      <div className="resume-screen">
        <Details points={data.PersonalDetails} />
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
        {additional_points.map( (key,i) =>
            <DisplaySection type={1} section={key} points={data.ExtraPoints[key]}/>
				)}
      </div>
    );
  }
}
