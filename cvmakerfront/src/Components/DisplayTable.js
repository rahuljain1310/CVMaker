import React, { Component } from 'react';
export default class DisplayTable extends Component {
	render() {
		return (
            <table className="Academic Details">
                <thead>
                    <tr>
                        <td>Passing Year</td>
                        <td>Degree/Board</td>
                        <td>Institute/School</td>
                        <td>%/GPA</td>
                    </tr>
                </thead>
                <tbody>
                {this.props.list.map( (object,i) =>
                    <tr key={i} className="TableBox">
                        <td>{object.passing_year}</td>
                        <td>{object.degree_board}</td>
                        <td>{object.institute_school}</td>
                        <td>{object.percen_cgpa}</td>
                    </tr>
                )}
                </tbody>
            </table>
			
		)
	}
}
