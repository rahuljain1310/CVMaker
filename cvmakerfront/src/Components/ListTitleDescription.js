import React, { Component } from 'react';
export default class ListTitleDescription extends Component {
	render() {
		return (
			<div className="DescriptionBox">
				{this.props.list.map( (object,i) =>
					<li key={i}> <span><strong>{object.title}</strong>:{object.description} </span></li> 
				)}
			</div>
		)
	}
}
