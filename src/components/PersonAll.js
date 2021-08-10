import React from 'react'
import Person from './Person'
import PersonWithFlag from './PersonWithFlag'

const PersonAll = ({ persons, showAll }) => {
    const personsToshow = showAll
    
    ? persons.filter(person => person.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)
    : persons

    if (personsToshow.length === 1) {
        return(
            <div>
                {personsToshow.map(person => 
                <PersonWithFlag key={person.name} person={person} /> 
                )}
            </div>
            
        )
        
    }

    if (personsToshow.length > 10){
        return(
            <div>
                Too many matches, specify more..
            </div>
        )

    } else {
        return (
            <div>
                {personsToshow.map(person => 
                <Person key={person.name} person={person} /> 
                )}
            </div>
          
        )
    }
    
  
}

export default PersonAll