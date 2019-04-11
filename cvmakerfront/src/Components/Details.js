import React, { Component } from 'react';

export default class Details extends Component {
    render() {
        return (
          <div>
              {this.props.points.Name} <br/>
              {this.props.points.Contact} <br/>
              {this.props.points.Email}
          </div>
        )
    }
}
