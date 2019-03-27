import React from 'react'
import Person from './Person'

const ViewDirectory = ({persons, deletePerson}) => {
    return(
        <table>
        {persons.map(person => <Person key={person.id} person={person} deletePerson={deletePerson(person.name)}/>)} 
        </table> 
    )
}

export default ViewDirectory