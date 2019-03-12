import React, { Component } from 'react';
export default class TDSupervisor extends Component {
	render() {
		return (
			<div className="DescriptionBox">
                {this.props.list.map( (object,i) => 
                    <li key={i}>
                        <span><strong>{object.title}</strong> ( {object.supervisor} ) <i>{object.duration}</i>&nbsp;  &nbsp; </span> <br/>
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
