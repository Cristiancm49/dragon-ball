import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaFemale, FaMale, FaInfoCircle } from 'react-icons/fa'

const NavBar = () => {
  const navigator = useNavigate()

  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <img
          className='imgNavBar'
          onClick={() => navigator('/')}
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
          alt="Logo" />
      </div>
      <div className='containerButton'>
        <button className='buttoninfo' onClick={() => navigator('/')}>
          <FaHome className="icon" />
          <span className='textnav'>Home</span>
        </button>
        <button className='buttoninfo' onClick={() => navigator('/personajes/Female')}>
          <FaFemale className="icon" />
          <span className='textnav'>Femenino</span>
        </button>
        <button className='buttoninfo' onClick={() => navigator('/personajes/Male')}>
          <FaMale className="icon" />
          <span className='textnav'>Masculino</span>
        </button>
        <button className='ButtonMoreInfo' onClick={() => navigator('/moreInfo')}>
          <FaInfoCircle className="icon" />
          <span className='textnavinfo'>More Info</span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
