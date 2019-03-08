import React, { Component } from 'react';

export default class EditPoint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.detail.title,
            description: this.props.detail.description,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.detail.title !== this.state.title) {
          this.setState({ title: nextProps.detail.title });
        }
        if (nextProps.detail.description !== this.state.description) {
            this.setState({description : nextProps.detail.description})
        }
    }

	render() {
        let updatepoint = this.props.update
        let deletepoint = this.props.delete
        let x = this.props.index
		return (
            <div className="edit-point">
                <input className="edit-point-title" placeholder="Title" 
                    value={this.state.title} onChange={(e)=>this.setState({title: e.target.value},() => updatepoint(this.state,x))}/>
                <input className="edit-point-description" placeholder="Description" 
                    value={this.state.description} onChange={(e)=>this.setState({description: e.target.value}, () => updatepoint(this.state,x))}/>
                <button onClick={(e) => deletepoint(x)}>Remove</button>
            </div>
		)
	}
}
