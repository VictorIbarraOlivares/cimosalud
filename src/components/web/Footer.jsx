import React from 'react'
import { faLocationDot, faPhone,faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__logo">
          <div className='card__logo'>
            <div className='content__img__logo'>
              <img src="/public/images/logos/logo_250x172.png" alt="Logo de CIMO Salud" className='img__logo' />
            </div>
            <p className='logo__paragraph'>Nuestro objetivo es brindar atención de calidad de una manera cortés, respetuosa y compasiva. Esperamos que nos permita cuidarlo y nos esforzaremos, por ser la primera y mejor opción para el cuidado de la salud de su familia.</p>
            <a href="https://api.whatsapp.com/send?phone=56999609708&amp;text=Wuena CIMO SALUD !!!" target="_blank" rel="nofollow" className="logo__reserva">
                <FontAwesomeIcon icon={faBookMedical} className='card__logo__icon__reserva'/>
                <span className='card__fono__number'>Reserve una cita</span>
              </a>
          </div>
        </div>
        <div className="footer__card">
          <article className="card">
            <div className="card__container">
              <p className="card__title">Contacto</p>
              <p className="card__paragraph">Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p>

              <a href="tel:+56999609708" target="_blank" className="card__fono">
                <FontAwesomeIcon icon={faPhone} className="card__fono__icon"/>
                <span className='card__fono__number'>+56 9 9960 9708</span>
              </a>

              <p className="card__paragraph">Padre mariano #10, oficina 701. - Providencia, Santiago</p>

              <p className='card__paragraph card__paragraph__final'>
                <a href="https://maps.google.com/maps/dir//Padre+Mariano+10,+Edificio+PadreMariano+7500026+Santiago,+Providencia+Regi%C3%B3n+Metropolitana/@-33.4263319,-70.6159631,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9662cf6386fe6833:0x78c5a643711f0375" target="_blank" className='card__como__llegar__link'>
                  <FontAwesomeIcon icon={faLocationDot} className='card__icon__como__llegar'/>
                  <span className='card__como__llegar__paragraph'>Como llegar</span>
                </a>
              </p>
            </div>
            <div className="card__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8815685661307!2d-70.6185380243818!3d-33.426331873399086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6386fe6833%3A0x78c5a643711f0375!2sPadre%20Mariano%2010%2C%20Edificio%20PadreMariano%2C%207500026%20Santiago%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1672104456664!5m2!1ses!2scl" className="map" ></iframe>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Footer