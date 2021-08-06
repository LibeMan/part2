import React from 'react'
import Person from './Person'

const PersonAll = ({ persons, showAll }) => {
    const personsToshow = showAll
    ? persons.filter(person => person.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)
    : persons
  return (
      <div>
          {personsToshow.map(person => 
          <Person key={person.name} person={person} /> 
          )}
      </div>
    
  )
}

export default PersonAll