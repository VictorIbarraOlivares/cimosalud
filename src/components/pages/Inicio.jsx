import { Link } from 'react-router-dom'
import { faBookMedical, faHouseMedical, faInfoCircle, faKitMedical, faPumpMedical, faTooth, faTruckMedical, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import InfoEspecialidades from '../partials/InfoEspecialidades';

function Inicio() {
  return (
    <div className='inicio__page'>
      <div className='inicio__carousel'>
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_medica.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Medicina General</p>
                <Link to="/especialidades/medicina-general" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_odontologia.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Odontología</p>
                <Link to="/especialidades/odontologia" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_kinesiologia.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Kinesiología</p>
                <Link to="/especialidades/kinesiologia" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_fonoaudiologia.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Fonoaudiología</p>
                <Link to="/especialidades/fonoaudiologia" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_psicologia.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Psicología</p>
                <Link to="/especialidades/psicologia" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image"
              src="/images/especialidades/area_nutricion.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='carousel__content'>
                <p className='carousel__text'>Nutrición</p>
                <Link to="/especialidades/nutricion" className="carousel__link" >
                  <p className='carousel__link__text__desktop'>Conoce más aquí &gt;</p>
                  <p className='carousel__link__text__mobile'>Ver más &gt;</p>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='content__reserva'>
        <a href="https://feb1fedc09f15c259eda5ff33fea05cb71d2b4ca.agenda.softwaredentalink.com/agendas/agendamiento" target="_blank" rel="nofollow" className="boton__reserva__desktop">
          <svg  className='svg__reserva__white' fill="#fff" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
          <svg className='svg__reserva__green' fill="#00b495" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#00b495"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
          <span className='boton__reserva__text'>Reserva de horas</span>
        </a>
      </div>

      <InfoEspecialidades />


      {/* <div className="info__principal">
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
      </div> */}

      {/* <div className="info__doc">
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
      </div> */}

      {/* <div className='info__mision'>
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
      </div> */}
    </div>
  )
}

export default Inicio