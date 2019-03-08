import React, { Component } from 'react';
import EditPoint from './EditPoint'
import ToggleBar from './ToggleBar'

class EditTitleDescription extends Component {
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

export default class EditSectionTitleDescription  extends Component {
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
		this.props.update(this.props.points.concat([{title:"",description:""}]))
	}
	deletepoint = (index) => {
		let x = this.props.points
		x.splice(index,1)
		this.props.update(x)
	} 
    render() {
		// if(this.props.points === undefined || this.props.points.length === 0) {
		// 	this.props.update(this.props.points.concat([{title:"",description:""}]))
		// }
		// console.log(this.props.points)
        return (
            <div>
                <ToggleBar show={this.state.show} text={this.props.section} toggle={()=>this.setState({show: !this.state.show})}/>
				{ this.state.show && 
					<div>
						<button onClick={this.addpoint}>Add Point</button>
						<EditTitleDescription list={this.props.points} update={this.updatePoints} delete={this.deletepoint}/>
					</div>
				}
            </div>
        )
    }
}
