import React, { Component } from 'react';
export default class TitleDurationPoints extends Component {
	render() {
		return (
			<div className="DescriptionBox">
                {this.props.list.map( (object,i) => 
                    <li key={i}>
                        <span><strong>{object.title}</strong> &nbsp; ( {object.duration} ) &nbsp; </span> <br/>
                        <div className="SubDescription"> 
                            {object.subpoints.map( (x) => 
                                <div className="Subpoint"> 
                                    <p>-{x}</p> <br/>
                                </div>
                            )}
                        </div>
                    </li> 
				)}
			</div>
		)
	}
}
