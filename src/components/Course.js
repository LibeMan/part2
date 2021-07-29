import React from 'react'

const TotalSum = (props) => {
    const array1 = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    {props.course.parts.map(part =>
        array1.push(part.exercises)
        )}
    return(
        <div>
            Total of {array1.reduce(reducer)} exercises
        </div>
    )
}




const Course = ({ course }) => {

  return (
    <div>
        <h1>{course.name}</h1>
        <ul>
            {course.parts.map(part => 
                <li key={part.id}>{part.name} {part.exercises}</li>
                
            )}
        </ul>
       
        <TotalSum course={course}/>
        
    </div>
  )
}

export default Course