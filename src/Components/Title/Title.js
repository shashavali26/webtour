import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className='title'>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </div>
  )
}

export default Title