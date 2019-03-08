import React, { Component } from 'react';
import ToggleBar from './Components/ToggleBar'
import EditSectionTitleDescription from './Components/EditSectionTitleDescription';
import EditSectionTitleDurationPoints from './Components/EditSectionTitleDurationPoints';

// class AcademicDetails extends Component {
//     constructor(props) {
// 		super(props)
// 		let x = {
// 			title:"Title",
// 			description: "Description",
// 		}
//         this.state = {
// 			show : false,
// 			sections: [x],
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <ToggleBar show={this.state.show} text="Academic Details" toggle={()=>this.setState({show: !this.state.show})}/>
//                 { this.state.show && <ListTitleDescription list={this.state.sections}/> }
//             </div>
//         )
//     }
// }

class CoursesDone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false,
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Courses Done" toggle={()=>this.setState({show: !this.state.show})}/>
                {this.state.show && <textarea value={this.props.Courses} onChange={(e) => this.props.update(e.target.value)}></textarea> }
            </div>
        )
    }
}
export default class EditResume extends Component {
	constructor(props) {
		super(props)
		let x = {
			title: "Hello",
			description: "World",
		}
		this.state = {
			ScholasticAchievements: [],
			TechnicalSkills: [],
			Courses : "",
			Projects: [],
			Internships: [],
			POR: [],
			AcademicDetails: [],
			ExtraCurricularActivities: [],
		}
	}
	updateCourses = (x) => {
		console.log("Courses update"+x)
		this.setState({Courses: x})
	}
	render() {
		return (
		<div className="resume-edit">
			<div className="edit-body">
				{/* <AcademicDetails/> */}
				<EditSectionTitleDescription section="Scholastic Achievements" points={this.state.ScholasticAchievements} update={(x)=>this.setState({ScholasticAchievements: x},() => this.props.updateCV(this.state))}/>
				<CoursesDone list={this.state.Courses} update={(x) => this.setState({Courses: x},() => this.props.updateCV(this.state)) }/>
				<EditSectionTitleDurationPoints section="Internships" points={this.state.Internships} update={(x)=>this.setState({Internships:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDurationPoints section="Projects" points={this.state.Projects} update={(x)=>this.setState({Projects:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDescription section="Technical Skills" points={this.state.TechnicalSkills} update={(x)=>this.setState({TechnicalSkills: x},() => this.props.updateCV(this.state))}/>
				<EditSectionTitleDurationPoints section="Position of Responsibility" points={this.state.POR} update={(x)=>this.setState({POR:x},()=>this.props.updateCV(this.state))} />
				<EditSectionTitleDescription section="Extra Curricular Activities" points={this.state.ExtraCurricularActivities} update={(x)=>this.setState({ExtraCurricularActivities: x},() => this.props.updateCV(this.state))}/>
			</div>
			<div className="edit-button">
				<button onClick={() => this.props.updateCV(this.state)}>Save CV</button>
			</div>
		</div>
		);
	}
}