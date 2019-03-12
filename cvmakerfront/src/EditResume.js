import React, { Component } from 'react';
import ToggleBar from './Components/ToggleBar'
import EditSectionTitleDescription from './Components/EditSectionTitleDescription';
import EditSectionTitleDurationPoints from './Components/EditSectionTitleDurationPoints';
import EditSectionTDSupervisorPoints from './Components/EditSectionTDSupervisorPoints';
import EditAcademicDetails from './Components/EditAcademicDetails';

class DescriptionParagraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false,
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text={this.props.section} toggle={()=>this.setState({show: !this.state.show})}/>
                {this.state.show && <textarea value={this.props.Courses} onChange={(e) => this.props.update(e.target.value)}></textarea> }
            </div>
        )
    }
}
export default class EditResume extends Component {
	constructor(props) {
		super(props)
		this.state = this.props.state.CVPoints
	}
	render() {
		return (
		<div className="resume-edit">
			<div className="edit-body">
				{/* <AcademicDetails/> */}
				<EditAcademicDetails section="Academic Details" points={this.state.AcademicDetails} update={(x)=>this.setState({AcademicDetails: x},() => this.props.updateCV(this.state))}/>
				<EditSectionTitleDescription section="Scholastic Achievements" points={this.state.ScholasticAchievements} update={(x)=>this.setState({ScholasticAchievements: x},() => this.props.updateCV(this.state))}/>
				<DescriptionParagraph section="Courses" list={this.state.Courses} update={(x) => this.setState({Courses: x},() => this.props.updateCV(this.state)) }/>
				<DescriptionParagraph section="Professional Summary" list={this.state.ProfessionalSummary} update={(x) => this.setState({ProfessionalSummary: x},() => this.props.updateCV(this.state)) }/>
				<EditSectionTitleDurationPoints section="Work Experience" points={this.state.WorkEx} update={(x)=>this.setState({WorkEx:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDurationPoints section="Internships" points={this.state.Internships} update={(x)=>this.setState({Internships:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTDSupervisorPoints section="Projects" points={this.state.Projects} update={(x)=>this.setState({Projects:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDescription section="Technical Skills" points={this.state.TechnicalSkills} update={(x)=>this.setState({TechnicalSkills: x},() => this.props.updateCV(this.state))}/>
				<EditSectionTitleDurationPoints section="Position of Responsibility" points={this.state.POR} update={(x)=>this.setState({POR:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDescription section="Extra Curricular Activities" points={this.state.ExtraCurricularActivities} update={(x)=>this.setState({ExtraCurricularActivities: x},() => this.props.updateCV(this.state))}/>
				<EditSectionTitleDescription section="Certification" points={this.state.Certification} update={(x)=>this.setState({Certification: x},() => this.props.updateCV(this.state))}/>
			
			</div>
			<div className="edit-button">
				<button onClick={() => this.props.updateCV(this.state)}>Save CV</button>
			</div>
		</div>
		);
	}
}