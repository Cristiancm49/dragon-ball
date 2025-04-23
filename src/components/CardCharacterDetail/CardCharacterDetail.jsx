import React from 'react'
import './CardCharacterDetail.css'

const CardCharacterDetail = ({
    image,
    name,
    race,
    gender,
    namePlanet,
    ki,
    maxKi,
    description }) => {
    return (
        <div className='container'>
            <div className='containerCharacterDetail'>
                <div className='containerImgPersonajeDetail'>
                    <img
                        className='imgPersonajeDetail'
                        src={image}
                        alt={`Imgen del personaje de dragon ball z ${name}`} />
                </div>
                <div className='containerTexts'>

                    <div>
                        <h2 className='nombre1'>{name}</h2>
                        <h3 className='subtitulo1'>{race} - {gender} - {namePlanet}</h3>
                    </div>

                    <div className='containerText'>
                        <h3 className='label'>KI</h3>
                        <h3 className='valor'>{ki}</h3>
                    </div>

                    <div className='containerText'>
                        <h3 className='label'>MaxKI</h3>
                        <h3 className='valor'>{maxKi}</h3>
                    </div>

                    <div className='containerText'>
                        <h3 className='label'>Descripcion:</h3>
                        <p className='valor'>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardCharacterDetail