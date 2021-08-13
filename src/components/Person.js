import React from 'react'

const Person = ({ person, deletePerson }) => {

  

  return (
    <li className="person">{person.name} - {person.number} <button name={person.name} value={person.id} onClick={deletePerson}>Delete</button></li>
  )
}

export default Person