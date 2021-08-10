import React from 'react'

const Filter = ({showAll, handleShowChange}) => {
  return(
    <div>
      <div> Search country: <input value={showAll} onChange={handleShowChange}></input> </div>
    </div>
  )
}

export default Filter