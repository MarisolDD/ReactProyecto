import React from 'react'
import Card from './Card'

import image1 from '../images/iguazu.jpeg'
import image2 from '../images/bariloche.jpeg'
import image3 from '../images/jujuy.jpeg'
import image4 from '../images/calafate.jpeg'

const cards = [
    {
        id: 1,
        title: '$40.000',
        image: image1,
        url: 'https://misiones.tur.ar/iguazu/',
        text: 'Iguazu'
    },
    {
        id: 2,
        title: '$45.000',
        image: image2,
        url: 'https://barilocheturismo.gob.ar/es/home',
        text: 'Bariloche'

    },
    {
        id: 3,
        title: '$48.000',
        image: image3,
        url: 'http://www.turismo.jujuy.gob.ar/',
        text: 'Jujuy'
    },
    {
        id: 4,
        title: '$50.000',
        image: image4,
        url: 'https://www.elcalafate.tur.ar/',
        text: 'Calafate'
    }

]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className="row mt-4">
    {
        cards.map(card => (
            <div className="col-md-3" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}></Card >
            </div>
        ))
    }
    </div>
 </div>
  )
}

export default Cards