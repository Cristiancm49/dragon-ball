import React from 'react'
import './MoreInfo.css'

const MoreInfo = () => {
  return (
    <div className='containerGlobal'>
      <div className='containerCardInfo'>
        <img className='imgProfile' src="/img/cristian.jpg" alt="Cristian" />
        <h4>Cristian Cortes Mondragon</h4>
        <p>Universidad de la Amazonia</p>
        <p>Desarrollador FrontEnd</p>
        <div className='containerLogos'>
          <a className='logoRedes' href="https://github.com/Cristiancm49" target="_blank" rel="noopener noreferrer">
            <img className='imgRedes' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a className='logoRedes' href="https://www.linkedin.com/in/ccortesm/" target="_blank" rel="noopener noreferrer">
            <img className='imgRedes' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className='containerCardInfo'>
        <img className='imgProfile' src="/img/mafe.jpeg" alt="Maria Fernanda" />
        <h4>Maria Fernanda Perdomo</h4>
        <p>Universidad de la Amazonia</p>
        <p>Desarrollador FrontEnd</p>
        <div className='containerLogos'>
          <a className='logoRedes' href="https://github.com/mafeperdomo" target="_blank" rel="noopener noreferrer">
            <img className='imgRedes' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a className='logoRedes' href="https://www.linkedin.com/in/ccortesm/" target="_blank" rel="noopener noreferrer">
            <img className='imgRedes' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
