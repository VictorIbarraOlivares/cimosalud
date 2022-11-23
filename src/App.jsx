import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <div className='header__container'>
          <div className='header__elements'>
            <div className='header__logo'>
              <h1 className="">CIMO</h1>
              <span className='span__logo'>logo</span>

            </div>

            <div className='header__navigation'>
              <nav className="nav">
                <div className='nav__navigation'>
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


              <div className='header__tool'>
                <div className='header__tool__phone'>
                  <a href='tel:+56964338091'>+56 9 6433 8091</a>
                </div>

                <div className='header__tool_button'>
                  <a href="https://api.whatsapp.com/send?phone=56964338091&text=" target="_blank">Reserva una cita</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
