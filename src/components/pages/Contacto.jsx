import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contacto() {
  return (
    <div className="page__contacto">
      <div className="content__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8815685661307!2d-70.6185380243818!3d-33.426331873399086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6386fe6833%3A0x78c5a643711f0375!2sPadre%20Mariano%2010%2C%20Edificio%20PadreMariano%2C%207500026%20Santiago%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1672104456664!5m2!1ses!2scl" className="map__contacto" ></iframe>
      </div>

      <div className="card__contacto">
        <div className="card__contacto__container">
          <p className="card__contacto__title">¿Cómo podemos ayudar?</p>
          <p className="card__contacto__paragraph">Si tienes dudas, escríbenos. Si deseas un presupuesto, puedes escribir o llamarnos, estamos atentos a tus necesidades. Estamos para ayudarte.</p>
          <input type="text" className="contacto__input" placeholder="Nombre y Apellido"/>
          <textarea cols="40" rows="10" className="contacto__textarea" placeholder="Mensaje"></textarea>

          <div className="content__button__contacto">
            <button type="button" className="contacto__button">
            <FontAwesomeIcon icon={faMessage} className="contacto__button__icon" /> Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto