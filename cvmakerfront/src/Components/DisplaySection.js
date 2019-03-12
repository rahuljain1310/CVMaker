import React, { Component } from 'react';
import Headline from './Headline'
import ListTitleDescription from './ListTitleDescription'
import TDOrganisation from './TDOrganisation'
import TDSupervisor from './TDSupervisor';
import DisplayTable from './DisplayTable'

const ParagraphList = ({list}) => (
  <div className="paragraph-list"> <p>{list}</p> </div>
);

export default class DisplaySection extends Component {
    render() {
      let key = this.props.type
        return (
          <div>
            <Headline text={this.props.section}/>
            { key === 1 && <ListTitleDescription list={this.props.points}/> }
            { key === 2 && <TDOrganisation list={this.props.points}/> }
            { key === 3 && <TDSupervisor list={this.props.points}/> }
            { key === 4 && <ParagraphList list={this.props.points}/> }
            { key === 5 && <DisplayTable list={this.props.points} /> } 
          </div>
        )
    }
}
