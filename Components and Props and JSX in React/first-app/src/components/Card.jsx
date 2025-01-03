import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
      <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding-.png" alt="" width={233}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
