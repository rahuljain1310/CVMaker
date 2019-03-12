import React, { Component } from 'react';
import ToggleBar from './ToggleBar'

class EditPoint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passing_year : this.props.detail.passing_year,
            degree_board: this.props.detail.degree_board,
            institute_school: this.props.detail.institute_school,
            percen_cgpa: this.props.detail.percen_cgpa,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.detail.passing_year !== this.state.passing_year) {
          this.setState({ passing_year: nextProps.detail.passing_year });
        }
        if (nextProps.detail.degree_board !== this.state.degree_board) {
            this.setState({degree_board : nextProps.detail.degree_board})
        }
        if (nextProps.detail.institute_school !== this.state.institute_school) {
            this.setState({institute_school : nextProps.detail.institute_school})
        }        
        if (nextProps.detail.percen_cgpa !== this.state.percen_cgpa) {
            this.setState({percen_cgpa : nextProps.detail.percen_cgpa})
        }
    }
	render() {
        let updatepoint = this.props.update
        let deletepoint = this.props.delete
        let x = this.props.index
		return (
            <div className="edit-point">
                <input className="xyz" placeholder="Passing Year" 
                    value={this.state.passing_year} onChange={(e)=>this.setState({passing_year: e.target.value},() => updatepoint(this.state,x))}/>
                <input className="xyz" placeholder="Degree/Board" 
                    value={this.state.degree_board} onChange={(e)=>this.setState({degree_board: e.target.value}, () => updatepoint(this.state,x))}/>
                <input className="xyz" placeholder="Institute/School" 
                    value={this.state.institute_school} onChange={(e)=>this.setState({institute_school: e.target.value}, () => updatepoint(this.state,x))}/>
                <input className="xyz" placeholder="%/GPA" 
                    value={this.state.percen_cgpa} onChange={(e)=>this.setState({percen_cgpa: e.target.value}, () => updatepoint(this.state,x))}/>
                <button onClick={(e) => deletepoint(x)}>Remove</button>
            </div>
		)
	}
}

class EditDetails extends Component {
	render() {
		return (
            <div className="edit-fields">
                {this.props.list.map( (object,i) =>
                    <EditPoint detail={object} key={i} index={i} update={this.props.update} delete={this.props.delete}/>
				)}
            </div>
		)
	}
}

export default class EditAcademicDetails  extends Component {
    constructor(props) {
		super(props)
        this.state = { show : false }
	}
	updatePoints = (inputstate,index) => {
		let x = this.props.points
		x[index] = inputstate
		this.props.update(x)		
	}
	addpoint = () => {
		this.props.update(this.props.points.concat([{passing_year:"",degree_board:"",institute_school:"",percen_cgpa:""}]))
	}
	deletepoint = (index) => {
		let x = this.props.points
		x.splice(index,1)
		this.props.update(x)
	} 
    render() {
        return (
            <div>
                <ToggleBar show={this.state.show} text={this.props.section} toggle={()=>this.setState({show: !this.state.show})}/>
				{ this.state.show && 
					<div>
						<button onClick={this.addpoint}>Add Point</button>
						<EditDetails list={this.props.points} update={this.updatePoints} delete={this.deletepoint}/>
					</div>
				}
            </div>
        )
    }
}
