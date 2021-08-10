
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Person = ({ person }) => {
  const [ buttonView, setButtonView] = useState(false)
  const [ lol, setLol ] = useState([])
  const myKey = process.env.REACT_APP_API_KEY.toString()
  

  const hook = () => {
    console.log('effect')
    axios
      .get("http://api.weatherstack.com/current?access_key="+myKey+"&query="+person.capital)
      .then(response => {
        console.log('HERE YOU GO!!')
        setLol(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log(lol)

  

  if (buttonView === true){
    return(
      <div>
        <h1>{person.name} - {person.number}</h1> <button onClick={() => setButtonView(!buttonView)}>
             {buttonView ? 'hide' : 'show' }
        </button> <br/>
        Capital: {person.capital} <br/>
        Population: {person.population}
        <br/>
        <h3>Languages:</h3>
        {person.languages.map(language=> <li>{language.name}</li>)}
        <br/>
        <img style={{height:"100px", width:"150px"}} src={person.flag}alt="new"></img>
        <br/> 
        Weather: {lol.current.temperature}<br/>
        <img style={{height:"100px", width:"100px"}} src={lol.current.weather_icons}alt="new"></img> <br/>
        {lol.current.weather_descriptions}
      </div>
    )
  } else{
    return (
      <div>
        <li>{person.name} - {person.number} <button onClick={() => setButtonView(!buttonView)}>
             {buttonView ? 'hide' : 'show' }
          </button> 
        </li>
      </div>
      
    )
  }
}

export default Person







/*<button onClick={handleClick}>
        Show
      </button>*/