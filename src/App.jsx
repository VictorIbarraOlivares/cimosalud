import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [openHamburguer, setOpenHamburguer] = useState(false);

  return (
    <div className="App">
      <nav
        className={`nav ${openHamburguer && 'open'}`}>
        <div className='brand__title'>CIMO</div>
        <div 
          className={`toggle-button ${openHamburguer && 'open'}`} 
          onClick={() => setOpenHamburguer(!openHamburguer)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div 
          className={`nav__navigation ${openHamburguer && 'open'}`} >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link">Inicio</a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">Nosotros</a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">Servicios & Precios</a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='background__image'>
      </div>
    </div>
  )
}

export default App
