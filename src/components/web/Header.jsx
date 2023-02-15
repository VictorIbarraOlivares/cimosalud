import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [openHamburguer, setOpenHamburguer] = useState(false);

  return (
    <div>
      <nav
        className={`nav ${openHamburguer && 'open'}`}>
          <div className='content__hamburguer'>
            <div
              className={`toggle-button ${openHamburguer && 'open'}`}
              onClick={() => setOpenHamburguer(!openHamburguer)}>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </div>
        

          <div className='brand__title'>
            <Link to="/" className="brand__title__link" onClick={() => setOpenHamburguer(false)}><img src="/images/logos/logo_250x172.png" alt="Logo de CIMO Salud" className='brand__logo' /></Link>
          </div>

          <div className='brand__icons'>

            <a href="tel:+56932004779" target="_blank" className="link__icons">
              <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.0001 10.9999C21.0001 6.58166 17.4184 2.99994 13.0001 2.99994M14 7.12593C15.4057 7.48768 16.5123 8.59432 16.8741 10M16.062 14.2507V14.2507C16.6052 13.5264 17.5886 13.2943 18.3983 13.6992L19.6337 14.3168C20.4404 14.7202 20.8773 15.6135 20.7004 16.4979L20.3216 18.3922C20.1346 19.3271 19.3109 20.0146 18.3636 19.9075C11.1005 19.0859 4.91414 12.8995 4.09253 5.63644C3.98537 4.68912 4.67292 3.86542 5.60777 3.67845L7.50207 3.29959C8.38646 3.12271 9.27982 3.55963 9.68316 4.36632L10.3008 5.60168C10.7057 6.41142 10.4736 7.39483 9.7493 7.93802V7.93802C9.27761 8.2918 8.99002 8.86004 9.21796 9.40381C10.0014 11.2728 12.7272 13.9986 14.5962 14.782C15.14 15.01 15.7082 14.7224 16.062 14.2507Z" stroke="#00b495" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </a>

            <a href="https://api.whatsapp.com/send?phone=56932004779&amp;text=Hola CIMO SALUD, estuve revisando la pagina, y quisiera reservar una hora" target="_blank" rel="nofollow" className="link__icons">
              <svg fill="#00b495" width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
            </a>
          </div>
        
        
        <div
          className={`nav__navigation ${openHamburguer && 'open'}`} >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/nosotros" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Nosotros</Link>
            </li>
            <li className="nav__item">
              <Link to="/contacto" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Contacto</Link>
            </li>
            <li className="nav__item">
              <Link to="/nuestros-profesionales" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Nuestros Profesionales</Link>
            </li>
            {/* <li className="nav__item">
              <Link to="/" className="nav__link" onClick={() => setOpenHamburguer(!openHamburguer)}>Inicio</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header