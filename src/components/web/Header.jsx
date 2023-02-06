import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [openHamburguer, setOpenHamburguer] = useState(false);

  return (
    <div>
      <nav
        className={`nav ${openHamburguer && 'open'}`}>
        <div className='brand__title'>
          <img src="/public/images/logos/logo_100x68.png" alt="Logo de CIMO Salud" className='brand__logo' />
        </div>
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
              <Link to="/" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Inicio</Link>
            </li>
            <li className="nav__item">
              <Link to="/nosotros" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Nosotros</Link>
            </li>
            <li className="nav__item">
              <Link to="/servicios" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Servicios</Link>
            </li>
            <li className="nav__item">
              <Link to="/contacto" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header