<<<<<<< Updated upstream
import React from 'react'
import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
=======
import React, { useState, useEffect } from 'react'
import PersonAll from './components/PersonAll'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState('')


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleShowChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
  }


  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    persons.forEach(function(item){
      if (newName === item.name || newNumber === item.number){
        window.alert('Woopsidooo!! That name or number is already added to the phonebook')
      } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    }) 
  }
>>>>>>> Stashed changes

  return (

    <div>
<<<<<<< Updated upstream
      {courses.map(note => 
        <Course key={note.id} course={note} />
      )}
=======
      <h2>Countrybook</h2>
      <Filter showAll={showAll} handleShowChange={handleShowChange} />
      <Form newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Countires</h2>
      <ul>
        <PersonAll persons={persons} showAll={showAll}/>
      </ul>
>>>>>>> Stashed changes
    </div>
    
    
    
  ) 
  
}

export default App
