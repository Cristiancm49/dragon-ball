import React from 'react'
import './CardCharacter.css'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({ id, image, name, race, gender, ki, maxKi, affiliation }) => {
  const navigate = useNavigate()

  return (
    <div className="personaje-card" onClick={() => navigate(`/personaje/${id}`)}>
      <div className="personaje-img">
        <img className='imgPersonaje' src={image} alt={`${name} character`} />
      </div>
      <div className="personaje-info">
        <h2 className="nombre">{name}</h2>
        <p className="subtitulo">{race} - {gender}</p>

        <div className="info-block">
          <p className="label">Base KI:</p>
          <p className="valor">{ki}</p>
        </div>
        <div className="info-block">
          <p className="label">Total KI:</p>
          <p className="valor">{maxKi}</p>
        </div>
        <div className="info-block">
          <p className="label">Affiliation:</p>
          <p className="valor">{affiliation}</p>
        </div>
      </div>
    </div>
  )
}

export default CardCharacter
