import React, { Component } from 'react';
import ToggleBar from './ToggleBar'

class SubPoint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : this.props.text,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.text !== this.state.text) {
          this.setState({ text: nextProps.text });
        }
    }
	render() {
        let updatesubpoint = this.props.update
        let deletesubpoint = this.props.delete
        let x = this.props.index
		return (
            <div className="edit-sub-spoint">
                <input className="edit-point-text" placeholder="Title" 
                    value={this.state.text} onChange={(e)=>this.setState({text: e.target.value},() => updatesubpoint(this.state.text,x))}/>
                <button onClick={(e) => deletesubpoint(x)}>x</button>
            </div>
		)
	}
}

class Point extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.detail.title,
            duration: this.props.detail.duration,
            subpoints: this.props.detail.subpoints,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.detail.title !== this.state.title) {
          this.setState({ title: nextProps.detail.title });
        }
        if (nextProps.detail.duration !== this.state.duration) {
            this.setState({duration : nextProps.detail.duration})
        }
	}
	
	updatesubpoint = (inputtext,index) => {
		let x = this.props.detail.subpoints
		x[index] = inputtext
		this.setState({subpoints: x},() => this.props.update(this.state,this.props.index))
	}

	deletesubpoint = (index) => {
		let x = this.props.detail.subpoints
        x.splice(index,1)
		this.setState({subpoints: x},() => this.props.update(this.state,this.props.index))
	}

	addpoint = () => {
		let x = this.props.detail.subpoints
		x = x.concat([""])
        this.setState({subpoints: x},() => this.props.update(this.state,this.props.index))
	}

	render() {
        let updatepoint = this.props.update
        let deletepoint = this.props.delete
        let x = this.props.index
		return (
            <div className="edit-point">
                <input className="edit-point-title" placeholder="Title" 
                    value={this.state.title} onChange={(e)=>this.setState({title: e.target.value},() => updatepoint(this.state,x))}/>
                <input className="edit-point-duration" placeholder="Duration" 
                    value={this.state.duration} onChange={(e)=>this.setState({duration: e.target.value}, () => updatepoint(this.state,x))}/>
                <button onClick={(e) => deletepoint(x)}>Remove</button><br/>
				<button onClick={this.addpoint}>Add Sub-Point</button><br/>
                {this.props.detail.subpoints.map( (object,i) =>
                    <SubPoint text={object} key={i} index={i} update={this.updatesubpoint} delete={this.deletesubpoint}/>
				)}
            </div>
		)
	}
}


class EditTDPBox extends Component {
	render() {
		return (
            <div className="edit-fields">
                {this.props.list.map( (object,i) =>
                    <Point detail={object} key={i} index={i} update={this.props.update} delete={this.props.delete}/>
				)}
            </div>
		)
	}
}

export default class EditSectionTitleDurationPoints  extends Component {
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
        this.props.update(this.props.points.concat([{title:"",duration:"",subpoints: []}]))
        console.log("update for point added")
	}
	deletepoint = (index) => {
		let x = this.props.points
		x.splice(index,1)
		this.props.update(x)
	} 
    render() {
		// if(this.props.points === undefined || this.props.points.length === 0) {
		// 	this.props.update(this.props.points.concat([{title:"",duration:"",subpoints: [""]}]))
		// }
		// console.log(this.props.points)
        return (
            <div>
                <ToggleBar show={this.state.show} text={this.props.section} toggle={()=>this.setState({show: !this.state.show})}/>
				{ this.state.show && 
					<div>
						<button onClick={this.addpoint}>Add Point</button>
						<EditTDPBox list={this.props.points} update={this.updatePoints} delete={this.deletepoint}/>
					</div>
				}
            </div>
        )
    }
}
