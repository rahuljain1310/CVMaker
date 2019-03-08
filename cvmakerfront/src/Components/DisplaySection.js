import React, { Component } from 'react';
import Headline from './Headline'
import ListTitleDescription from './ListTitleDescription'
import TitleDurationPoints from './TitleDurationPoints'

export default class DisplaySection extends Component {
    render() {
      let key = this.props.type
      console.log(this.props.points)
        return (
          <div>
            <Headline text={this.props.section}/>
            { key === 1 && <ListTitleDescription list={this.props.points}/> }
            { key === 2 && <TitleDurationPoints list={this.props.points}/> }
            { key === 3 && <ListTitleDescription list={this.props.points}/> }
          </div>
        )
    }
}
