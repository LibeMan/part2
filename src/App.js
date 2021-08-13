import React, { useState,useEffect } from 'react'
import PersonAll from './components/PersonAll'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

  const deletePerson = (event) => {
    const deleteP = persons.find(p => p.id === event.target.value)
    if (window.confirm(`Do you want to delete ${event.target.name} ?`)) {
      personService
      .deletes(event.target.value)
      .then(persons => {
        setPersons(persons.filter(p => p.id !== event.target.value))
        console.log(deleteP)
      })
      .catch(error => {
       if (error.response) {
        setErrorMessage(
          `Person '${persons.name}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      } 
      /*
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
      */
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      }) 
    }
  }

  
  const addPerson = (event) => {
    event.preventDefault()
    console.log('person added', event.target)
    const nameObject = {
      name: newName,
      number: newNumber
    }

    if (persons.find(p => p.name === newName)) {
      if (window.confirm(`${newName} is already added to Phonebook, do you want to update the existing contact?`)){
        const personid = persons.find(p => p.name === newName)
        console.log(personid)
        personService
        .update(personid.id, nameObject)
        .then(returnedPerson => {
          setPersons(persons.map(p=>p.id !== personid ? p: returnedPerson))
          setNewName("")
          setNewNumber("")
        })
      } else {
        setNewName("")
        setNewNumber("")
      }

    } else {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  



  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Filter showAll={showAll} handleShowChange={handleShowChange} />
      <Form newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <ul>
        <PersonAll persons={persons} showAll={showAll} deletePerson={deletePerson}/>
      </ul>
      <Footer />
    </div>
  )
}

export default App