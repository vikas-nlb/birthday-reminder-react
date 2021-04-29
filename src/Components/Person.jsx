import React, { Component } from 'react'

class Person extends Component {
    render() {
        { console.log(this.props.person) }
        return (

            <div className="person-container">
                <img src={this.props.person.image} alt={this.props.person.description} />
                <div className="name-container">
                    <h2>{this.props.person.name}</h2>
                    <h3>{this.props.person.age}</h3>
                </div>
            </div>
        )
    }
}
export default Person;