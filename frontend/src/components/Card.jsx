import React from 'react'
import './card.css'
const Card = ({title, count}) => {
  return (
    <div>
        <div className="card">
            <h2>{title}</h2>
            <p>{count}</p>
        </div>
    </div>
  )
}

export default Card
