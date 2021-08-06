import React, { useState } from 'react'
import Person from './components/Person'
import PersonAll from './components/PersonAll'
import Form from './components/Form'
import Filter from './components/Filter'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showAll={showAll} handleShowChange={handleShowChange} />
      <Form newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <ul>
        <PersonAll persons={persons} showAll={showAll}/>
      </ul>
    </div>
  )
}

export default App