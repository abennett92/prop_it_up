import React, { Component } from 'react';
// import classes from './PersonCard.Module.css';

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ageP: this.props.age
        }
    }

    birthday = ()=>{
        this.setState({age: this.state.ageP+1})
    }

    render(){
        return(
            <div>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <p><button onClick = {this.birthday}>Happy Birthday!</button></p>
                </div>
            </div>
        )
        ;
    }
}

export default PersonCard;