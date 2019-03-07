import React, { Component } from 'react';
import Headline from './Headline'
import ListTitleDescription from './ListTitleDescription'

export default class DisplaySection extends Component {
    render() {
      console.log(this.props.points)
        return (
          <div>
            <Headline text={this.props.section}/>
            <ListTitleDescription list={this.props.points}/>
          </div>
        )
    }
}
