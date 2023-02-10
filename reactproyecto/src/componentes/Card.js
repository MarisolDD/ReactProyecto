import React from 'react'
import './cards.css'

function Card({title,imageSource, url, text}) {
  return (
    <div className='card text-center mt-5'>

            <h4 className='card-title'>{title}</h4>
        <img src= {imageSource} alt=''/>
    <div className='card-body'>
        <p className='card-text text-secondary'>{text}</p>
        <a href={url} className='btn btn-lg btn-secondary rounded-2'> 
        Select</a>
 
    </div>
    </div>

  )
}

export default Card