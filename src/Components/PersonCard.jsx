import React, { Component } from 'react';
// import classes from './PersonCard.Module.css';

class PersonCard extends Component{


    render(){
        return(
            <div>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                </div>
            </div>
        )
        ;
    }
}

export default PersonCard;