import React, { Component } from 'react';
export default class TitleDurationPoints extends Component {
	render() {
		return (
			<div className="DescriptionBox">
				{this.props.list.map( (object,i) =>
                <li key={i}> <span><strong>{object.Title}</strong> &nbps; ( {object.Duration} ) &nbps; </span> <br/>
                    <div className="SubDescription"> 
                        {object.Points.map( (object) => 
                            <div className="Subpoint"> 
                            - {object} <br/>
                            </div>
                        )}
                    </div>
                </li> 
				)}
			</div>
		)
	}
}
