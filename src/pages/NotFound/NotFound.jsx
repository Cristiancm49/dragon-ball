import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound-container">
    <div>
      <img src="https://64.media.tumblr.com/2dd92fb9683a48a0995c2f6b4be605a0/tumblr_nup23tsRem1uzhzl0o1_400.gifv" alt="" />
    </div>
    <p>Página no encontrada</p>
    <Link to="/" className="back-home">Volver al inicio</Link>
  </div>
  )
}

export default NotFound