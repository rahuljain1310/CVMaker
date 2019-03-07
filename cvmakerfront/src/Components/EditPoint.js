import React, { Component } from 'react';

export default class EditPoint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.detail.title,
            description: this.props.detail.description,
        }
    }

	render() {
        let updatepoint = this.props.update
        let x = this.props.index
		return (
            <div className="edit-point">
                <input className="edit-point-title" Placeholder="Title" 
                    value={this.props.title} onChange={(e)=>this.setState({title: e.target.value},updatepoint(this.state,x))}/>
                <input className="edit-point-description" Placeholder="Description" 
                    value={this.props.description} onChange={(e)=>this.setState({title: e.target.value},updatepoint(this.state,x))}/>
            </div>
		)
	}
}
