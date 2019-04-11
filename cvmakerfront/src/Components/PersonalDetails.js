import React, { Component } from 'react';
import ToggleBar from './ToggleBar'

class PersonalInputDetails extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.details
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.details.Name !== this.state.Name) {
        //   this.setState({ Name: nextProps.detail.Name });
        // }
        // if (nextProps.details.Contact !== this.state.Contact) {
        //     this.setState({ Contact: nextProps.detail.Contact });
        // }
        for(var key in nextProps.details){
            if (nextProps.details[key] !== this.state[key]) {
                this.setState({ key: nextProps.detail[key] });
            }
        }
    }
    changeState (key,newvalue) {
        let newstate = this.state
        newstate[key] = newvalue
        this.setState(newstate,()=>this.props.update(this.state))
    }
	render() {
        let list = Object.keys(this.props.details)
        console.log(list)
		return (
            <div>
                {list.map( (key,i) =>
                    <input placeholder={key} value={this.state[key]} onChange={(e)=>this.changeState(key,e.target.value)}/>
				)}
            </div>
		)
	}
}

export default class PersonalDetails  extends Component {
    constructor(props) {
		super(props)
        this.state = {
            show : false,
            details: this.props.details,
        }
	}
    render() {
        // console.log(this.props.details)
        return ( 
            <div>
                <ToggleBar show={this.state.show} text={this.props.section} toggle={()=>this.setState({show: !this.state.show})}/>
				{ this.state.show && 
					<div>
						<PersonalInputDetails details={this.props.details} update={(x)=>this.props.update(x)}/>
					</div>
				}
            </div>
        )
    }
}
