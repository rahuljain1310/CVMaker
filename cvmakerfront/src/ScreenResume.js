import React, { Component } from 'react';
import Headline from './Components/Headline'
import ListTitleDescription from './Components/ListTitleDescription'
import DisplaySection from './Components/DisplaySection';

// class AcademicDetails extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     let x = []
//     console.log(this.props) 
//     return (
//       <div>
//         <Headline text="Academic Details"/>
//         {/* <ListTitleDescription list={this.props.CVSections.AcademicDetails}/> */}
//       </div>
//     )
//   }
// }

export default class ScreenResume extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="resume-screen">
        <DisplaySection section="Academic Details" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection section="Projects" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection section="Internships" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection section="Technical Skills" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection section="Position of Responsibility" points={this.props.CVSections.AcademicDetails}/>
        <DisplaySection section="Extra Curricular Activities" points={this.props.CVSections.AcademicDetails}/>
      </div>
    );
  }
}
