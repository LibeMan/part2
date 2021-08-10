import React from 'react'

const PersonWithFlag = ({ person }) => {
  return (
    <div>
      <h1>{person.name} - {person.number}</h1>
      Capital: {person.capital} <br/>
      Population: {person.population}
      <br/>
        <h3>Languages:</h3>
        {person.languages.map(language=> <li>{language.name}</li>)}
        <br/>
        <img style={{height:"100px", width:"150px"}} src={person.flag}alt="new"></img>
    </div>
    
  )
}

export default PersonWithFlag