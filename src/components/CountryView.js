import React from 'react'

const CountryView = ({ person }) => {
  return (
    <div>
      <li>{person.name} - {person.number} <button type="submit">show</button> </li>
    </div>
    
  )
}

export default CountryView