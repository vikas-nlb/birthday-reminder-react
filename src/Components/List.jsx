import React, { Component, useState } from 'react'
import Person from './Person'
import data from '../Data/data'

function List(props){
        const everyone = props.people;
        return (
    
                <div className="list-container">
                    {everyone.map((person, index) => (
                        <Person key={index} person={person} />
                    ))}
                </div>
        )
    
}
export default List;