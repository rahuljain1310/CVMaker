import React, { Component } from 'react';
import ToggleBar from './Components/ToggleBar'
import Headline from './Components/Headline'
import EditTitleDescription from './Components/EditTitleDescription'
import ListTitleDescription from './Components/ListTitleDescription'

class AcademicDetails extends Component {
    constructor(props) {
		super(props)
		let x = {
			title:"Title",
			description: "Description",
		}
        this.state = {
			show : false,
			sections: [x],
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Academic Details" toggle={()=>this.setState({show: !this.state.show})}/>
                { this.state.show && <ListTitleDescription list={this.state.sections}/> }
            </div>
        )
    }
}

class ScholasticAchievements extends Component {
    constructor(props) {
		super(props)
		let x = {
			title:"Title",
			description: "Description",
		}
        this.state = {
			show : false,
			points : [x],
        }
	}
	
	updatePoints = (x) => {
		this.setState({points: x})
	}

    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Scholastic Achievements" toggle={()=>this.setState({show: !this.state.show})}/>
                { this.state.show && <EditTitleDescription list={this.state.points} update={this.updatePoints}/> }
            </div>
        )
    }
}
class CoursesDone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false,
            // coursesdone: this.props.Courses,
        }
    }
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text="Courses Done" toggle={()=>this.setState({show: !this.state.show})}/>
                {this.state.show &&
                <textarea value={this.props.Courses} onChange={(e) => this.props.update(e.target.value)}></textarea>
                }
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
			ScholasticAchievements: [x ,x ,x ,x],
			Courses : "",
			AcademicDetails: [],
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
				<ScholasticAchievements points={this.state.ScholasticAchievements}/>
				{/* <CoursesDone list={this.state.Courses} update={this.updateCourses}/> */}
				{/* <Internships/>
				<Projects/>
				<TechnicalSkills/>
				<PositionResponsibilty/>
				<ExtraCurricularActivities/> */}
			</div>
			<div className="edit-button">
				<button>Update CV</button>
			</div>
		</div>
		);
	}
}