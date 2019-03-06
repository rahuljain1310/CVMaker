import React, { Component } from 'react';
import Headline from './Components/Headline'

class AcademicDetails extends Component {
    render() {
        return (

            <Headline text="Academic Details"/>
        )
    }
}

export default class ScreenResume extends Component {
  render() {
    return (
      <div className="resume-screen">
        <AcademicDetails/>
      </div>
    );
  }
}
