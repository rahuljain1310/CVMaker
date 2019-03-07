import React, { Component } from 'react';
import EditPoint from './EditPoint'

export default class EditTitleDescription extends Component {
    constructor(props) {
        super(props)
    }
	render() {
		return (
            <div className="edit-fields">
                {this.props.list.map( (object,i) =>
                    <EditPoint detail={object} index={i} update={this.props.update}/>
				)}
            </div>
		)
	}
}
