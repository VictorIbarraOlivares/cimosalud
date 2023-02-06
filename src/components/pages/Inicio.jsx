import { Link } from 'react-router-dom'
import { faBookMedical, faHouseMedical, faInfoCircle, faKitMedical, faPumpMedical, faTooth, faTruckMedical, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function Inicio() {
  return (
    <div>
      {/* <div className='background__image'>
        <h1 className="title__inicio" >Centro Integral Medico y Odontológico</h1>
      </div> */}
      <div className='inicio__carousel'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_medica.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Medicina General</p>
              <Link to="/especialidades/medicina-general" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_odontologia.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Odontología</p>
              <Link to="/nosotros" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_kinesiologia.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Kinesiología</p>
              <Link to="/nosotros" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_fonoaudiologia.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Fonoaudiología</p>
              <Link to="/nosotros" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_psicologia.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Psicología</p>
              <Link to="/nosotros" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="test-image"
            src="/public/images/especialidades/area_nutricion.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='carousel__content'>
              <p>Nutrición</p>
              <Link to="/nosotros" className="carousel__link" >
                <p>Conoce más aquí ></p>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="info__principal">
        <div className="card__info">
          <div className="card__info__img">
            <a href="https://api.whatsapp.com/send?phone=56999609708"  target="_blank" rel="nofollow" className="card__info__link">
              <img src="images/llamada-de-emergencia.jpg" alt="Icono de llamda" className='img__info' />
            </a>
          </div>
          <p className="card__info__title">¿Conversemos?</p>
          <p className="card__info__paragraph">Escríbenos por Whatsapp<br/>+56 9 9960 9708</p>
        </div>
        <div className="card__info">
          <div className="card__info__img">
              <img src="images/bolsa-de-dinero.jpg" alt="Icono de bolsa de dinero" className='img__info' />
          </div>
          <p className="card__info__title">Cotiza tu Tratamiento</p>
          <p className="card__info__paragraph">Escríbenos a nuestro mail <br /> contacto@cimosalud.cl</p>
        </div>

        <div className="card__info">
          <div className="card__info__img">
              <img src="images/reloj.jpg" alt="Icono de reloj" className='img__info' />
          </div>
          <p className="card__info__title">Nuestros Horarios</p>
          <p className="card__info__paragraph">Nuestra sucursal atiende de <br /> Lunes a Sábado de 10:00 a 19:00 Hrs.</p>
        </div>

        <div className="card__info">
          <div className="card__info__img">
            <a href="https://maps.google.com/maps/dir//Padre+Mariano+10,+Edificio+PadreMariano+7500026+Santiago,+Providencia+Regi%C3%B3n+Metropolitana/@-33.4263319,-70.6159631,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9662cf6386fe6833:0x78c5a643711f0375" target="_blank" rel="nofollow" className="card__info__link">
              <img src="images/destino.jpg" alt="Icono de destino de viaje" className='img__info' />
            </a>
          </div>
          <p className="card__info__title">Visitanos</p>
          <p className="card__info__paragraph">Padre mariano #10, oficina 701 - Providencia, Santiago <br /> A pasos del Metro Pedro de Valdivia L1</p>
        </div>
      </div>

      <div className="info__doc">
        <div className="info__doc__texto">
          <p className="info__doc__texto__principal">Mejorando la calidad de vida a través de mejores tratamientos para su salud.</p>
          <p className="info__doc__texto__secundario">Trabajaremos con usted para desarrollar planes de atención individualizados, incluido el manejo de enfermedades crónicas. Estamos comprometidos a ser la principal red de atención médica de la región que brinda atención centrada en el paciente que inspira la excelencia clínica y de servicio.</p>
          <div className="info__doc__texto__footer">
            <div>
              <Link to="/nosotros" className="info__doc__texto__footer__link">Conozca a nuestros médicos</Link>
            </div>
            
            <div className='info__doc__texto__footer__doctor'>
              <p className='info__doc__texto__footer__doctor__nombre'>Arturo Vidal</p>
              <p className='info__doc__texto__footer__doctor__especialidad'>Cirujano Copete</p>
            </div>
          </div>
        </div>
        <div className="info__doc__image__content">
          <img src="images/docs/arturo_vidal.jpg" alt="" className='info__doc__image'/>
        </div>
      </div>

      <div className='info__mision'>
        <p className='info__mision__paragraph'>"Nuestra misión es recuperar la autoestima de las personas. ¡La sonrisa en los rostros de nuestros pacientes no tiene precio!"</p>
        <div className='info__mision__servicios'>
          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faBookMedical} className='info__mision__card__icon'/>
              Endodoncias
            </Link>
          </div>

          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faUserDoctor} className='info__mision__card__icon'/>
              Limpieza y profilaxis
            </Link>
          </div>

          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faKitMedical} className='info__mision__card__icon'/>
              Restauraciones
            </Link>
          </div>

          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faTruckMedical} className='info__mision__card__icon'/>
              Exodoncias
            </Link>
          </div>

          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faTooth} className='info__mision__card__icon'/>
              Prótesis
            </Link>
          </div>

          <div className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link not__cursor__pointer">
              <FontAwesomeIcon icon={faHouseMedical} className='info__mision__card__icon'/>
              Estética
            </Link>
          </div>

          <Link to="/servicios" className='info__mision__card'>
            <Link to="/servicios" className="info__mision__card__link">
              <FontAwesomeIcon icon={faInfoCircle} className='info__mision__card__icon'/>
              Y mucho más
            </Link>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Inicio