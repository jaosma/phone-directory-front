import React from 'react'

const Person = ({ person, deletePerson}) => {
    return (
        <tbody>
            <tr>
                <td>{person.name}</td> 
                <td>{person.number}</td>
                <td><button onClick={deletePerson}>poista</button></td>
            </tr>
        </tbody>
    )
}

export default Person