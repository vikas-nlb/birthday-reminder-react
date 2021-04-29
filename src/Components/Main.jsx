import React, { Component, useState } from 'react'
import data from '../Data/data'
import List from './List'

function Main() {
    const [people, setPeople] = useState(data);
    return (
        <div className="container">
            <h1>{people.length} Birthdays Today</h1>
            <List people={people}/>
            <button onClick={() => setPeople([])}>Clear All</button>
        </div>
    )
}
export default Main;
