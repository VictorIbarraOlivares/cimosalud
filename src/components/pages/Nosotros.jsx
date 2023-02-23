import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function Nosotros() {
  return (
    <div className="container__nosotros">

      <div className="nosotros__slide">
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_1.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_2.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_3.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_4.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_5.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item> */}
          <Carousel.Item>
            <img
              className="carousel__image__nosotros"
              src="/images/nosotros/image_6.png?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='nosotros__image__content'>
        <img className='nosotros__image' src="/images/logos/logo_250x172.png" alt="" />
      </div>

      <div className='especialidad__text__content'>


        <div className='remove__padding__top'>
          <p className='nosotros__paragraph'>
            CIMO SALUD, es un centro de profesionales del área médica enfocados en el
            tratamiento integrativo de todas sus disciplinas con el fin de recuperar el estado de
            salud cuando se ha visto alterado por una o más condiciones y enfermedades.
          </p>

          <p className='nosotros__paragraph'>
            Tiene como objetivo resolver el motivo de consulta de los pacientes atendidos en
            nuestra sede, entregando un tratamiento asertivo con equipos de
            última tecnología que garanticen la satisfacción en el tratamiento de las
            enfermedades que lo llevaron a consultar.
          </p>

          <p className='nosotros__paragraph'>
            CIMO SALUD cuenta con un equipo multidisciplinario conformado por Medico
            cirujano, Odontologos Especialistas, Fonoaudiologia, Kinesiologia, Psicologia y
            Nutricion.
          </p>
        </div>

        <div className='content__buttons__nosotros'>
          <div className='content__buttons__nostros__reserva'>
            <a href="https://feb1fedc09f15c259eda5ff33fea05cb71d2b4ca.agenda.softwaredentalink.com/agendas/agendamiento" target="_blank" rel="nofollow" className="boton__reserva__desktop">
              <svg className='svg__reserva__white' fill="#fff" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
              <svg className='svg__reserva__green' fill="#00b495" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#00b495"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
              <span className='boton__reserva__text'>Reserva de horas</span>
            </a>
          </div>
          <div className='content__buttons__nostros__especialidades'>
            <Link to="/especialidades" className="boton__reserva__desktop">
              <svg className='svg__reserva__white' fill="#fff" width="34px" height="34px" viewBox="0 0 100 100" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"></g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"> <path d="M39.4,47.9c-0.5,0-1-0.2-1.4-0.6l-8.2-8.2c-0.7-0.7-0.8-1.8-0.2-2.6c0.5-0.7,0.8-1.5,0.8-2.4c0-2.3-1.8-4.2-4.1-4.2 c0,0,0,0,0,0c-0.9,0-1.8,0.3-2.5,0.8c-0.8,0.6-1.9,0.5-2.6-0.2l-4.4-4.4c-0.8-0.8-0.8-2,0-2.8l10.1-10.1c0.4-0.4,0.9-0.6,1.4-0.6h0 c0.5,0,1,0.2,1.4,0.6L51,34.4c0.8,0.8,0.8,2,0,2.8L40.9,47.4C40.5,47.8,40,47.9,39.4,47.9z M33.8,37.5l5.7,5.7l7.3-7.3L28.4,17.5 l-7.3,7.3l1.9,1.9c1-0.5,2.2-0.7,3.4-0.7c4.5,0,8.2,3.7,8.1,8.2C34.5,35.4,34.2,36.5,33.8,37.5z M45.4,51.4L45.4,51.4 c-0.5,0-1-0.2-1.4-0.6l-4.7-4.7c-0.8-0.8-0.8-2,0-2.8l7.6-7.6c0.8-0.8,2.1-0.8,2.8,0l4.7,4.7c0.8,0.8,0.8,2,0,2.8l-7.6,7.6 C46.4,51.2,45.9,51.4,45.4,51.4z M43.5,44.7l1.9,1.9l4.8-4.8l-1.9-1.9L43.5,44.7z M20.9,23.9c-0.5,0-1-0.2-1.4-0.6l-5-5 c-0.8-0.8-0.8-2,0-2.8l4.6-4.6c0.8-0.8,2.1-0.8,2.8,0l5,5c0.4,0.4,0.6,0.9,0.6,1.4s-0.2,1-0.6,1.4l-4.6,4.6 C21.9,23.7,21.4,23.9,20.9,23.9z M18.7,16.9l2.2,2.2l1.8-1.8l-2.2-2.2L18.7,16.9z M26.3,42.4C26.3,42.4,26.2,42.4,26.3,42.4 c-2.3,0-4.3-0.9-5.8-2.5c-1.5-1.6-2.4-3.6-2.3-5.8c0-2.6,1.3-5,3.4-6.5c1.4-1,3.1-1.6,4.9-1.6c4.5,0,8.2,3.7,8.1,8.2c0,0,0,0,0,0 c0,1.7-0.6,3.4-1.6,4.7C31.4,41.1,28.9,42.4,26.3,42.4z M26.3,30c-0.9,0-1.8,0.3-2.5,0.8c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.5-0.7,0.8-1.5,0.8-2.4C30.5,31.9,28.6,30,26.3,30 C26.3,30,26.3,30,26.3,30z M50,82.6c-6.1,0-12.2-1.6-17.5-4.6c-11-6.3-17.8-18-17.8-30.7c0-7,2.1-13.8,5.9-19.6 c0.3-0.5,0.9-0.8,1.5-0.9c0.6-0.1,1.2,0.2,1.6,0.6l0.4,0.4c0.4,0.4,0.6,1,0.6,1.6c0,0.6-0.3,1.1-0.8,1.5c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.3-0.5,0.9-0.8,1.5-0.8c0.6,0,1.2,0.2,1.6,0.6 l0.2,0.2c0.6,0.6,0.8,1.5,0.4,2.3c-1.3,2.6-2,5.4-2,8.3c0,10.3,8.3,18.6,18.6,18.6c2.5,0,4.9-0.5,7.2-1.4c0.5-0.2,1-0.2,1.4,0h18.7 c0.7,0,1.4,0.4,1.8,1.1c0.3,0.7,0.3,1.5-0.1,2.1c-3,4.2-6.9,7.8-11.4,10.4C62.2,80.9,56.1,82.6,50,82.6z M19.7,39.1 c-0.7,2.6-1.1,5.4-1.1,8.2c0,11.2,6,21.6,15.8,27.2c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c2.8-1.6,5.4-3.7,7.6-6.1H58 c-2.6,1-5.3,1.5-8,1.5c-12.5,0-22.6-10.1-22.6-22.6c0-1.7,0.2-3.4,0.6-5.1c-0.6,0.1-1.1,0.2-1.7,0.2c-2.2,0-4.2-0.9-5.8-2.5 C20.2,39.6,20,39.4,19.7,39.1z M84.2,68.4H57.9c-1.1,0-2-0.9-2-2v-9.7c0-1.1,0.9-2,2-2h26.3c1.1,0,2,0.9,2,2v9.7 C86.2,67.5,85.3,68.4,84.2,68.4z M59.9,64.4h22.3v-5.7H59.9V64.4z M74.1,89.8H25.8c-0.7,0-1.4-0.4-1.8-1c-0.3-0.6-0.3-1.4,0.1-2 l7.6-11.6c0.6-0.9,1.7-1.2,2.7-0.6c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c0.9-0.5,2.1-0.2,2.7,0.6l7.6,11.6 c0.4,0.6,0.4,1.4,0.1,2C75.5,89.4,74.8,89.8,74.1,89.8z M29.5,85.8h40.9l-4.6-7c-4.9,2.5-10.3,3.8-15.9,3.8c-5.5,0-11-1.3-15.9-3.8 L29.5,85.8z"></path> </g> <g id="_x32_3"></g> <g id="_x32_4"></g> <g id="_x32_5"></g> </g></svg>

              <svg className='svg__reserva__green' fill="#00b495" width="34px" height="34px" viewBox="0 0 100 100" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"></g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"> <path d="M39.4,47.9c-0.5,0-1-0.2-1.4-0.6l-8.2-8.2c-0.7-0.7-0.8-1.8-0.2-2.6c0.5-0.7,0.8-1.5,0.8-2.4c0-2.3-1.8-4.2-4.1-4.2 c0,0,0,0,0,0c-0.9,0-1.8,0.3-2.5,0.8c-0.8,0.6-1.9,0.5-2.6-0.2l-4.4-4.4c-0.8-0.8-0.8-2,0-2.8l10.1-10.1c0.4-0.4,0.9-0.6,1.4-0.6h0 c0.5,0,1,0.2,1.4,0.6L51,34.4c0.8,0.8,0.8,2,0,2.8L40.9,47.4C40.5,47.8,40,47.9,39.4,47.9z M33.8,37.5l5.7,5.7l7.3-7.3L28.4,17.5 l-7.3,7.3l1.9,1.9c1-0.5,2.2-0.7,3.4-0.7c4.5,0,8.2,3.7,8.1,8.2C34.5,35.4,34.2,36.5,33.8,37.5z M45.4,51.4L45.4,51.4 c-0.5,0-1-0.2-1.4-0.6l-4.7-4.7c-0.8-0.8-0.8-2,0-2.8l7.6-7.6c0.8-0.8,2.1-0.8,2.8,0l4.7,4.7c0.8,0.8,0.8,2,0,2.8l-7.6,7.6 C46.4,51.2,45.9,51.4,45.4,51.4z M43.5,44.7l1.9,1.9l4.8-4.8l-1.9-1.9L43.5,44.7z M20.9,23.9c-0.5,0-1-0.2-1.4-0.6l-5-5 c-0.8-0.8-0.8-2,0-2.8l4.6-4.6c0.8-0.8,2.1-0.8,2.8,0l5,5c0.4,0.4,0.6,0.9,0.6,1.4s-0.2,1-0.6,1.4l-4.6,4.6 C21.9,23.7,21.4,23.9,20.9,23.9z M18.7,16.9l2.2,2.2l1.8-1.8l-2.2-2.2L18.7,16.9z M26.3,42.4C26.3,42.4,26.2,42.4,26.3,42.4 c-2.3,0-4.3-0.9-5.8-2.5c-1.5-1.6-2.4-3.6-2.3-5.8c0-2.6,1.3-5,3.4-6.5c1.4-1,3.1-1.6,4.9-1.6c4.5,0,8.2,3.7,8.1,8.2c0,0,0,0,0,0 c0,1.7-0.6,3.4-1.6,4.7C31.4,41.1,28.9,42.4,26.3,42.4z M26.3,30c-0.9,0-1.8,0.3-2.5,0.8c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.5-0.7,0.8-1.5,0.8-2.4C30.5,31.9,28.6,30,26.3,30 C26.3,30,26.3,30,26.3,30z M50,82.6c-6.1,0-12.2-1.6-17.5-4.6c-11-6.3-17.8-18-17.8-30.7c0-7,2.1-13.8,5.9-19.6 c0.3-0.5,0.9-0.8,1.5-0.9c0.6-0.1,1.2,0.2,1.6,0.6l0.4,0.4c0.4,0.4,0.6,1,0.6,1.6c0,0.6-0.3,1.1-0.8,1.5c-1.1,0.8-1.7,2-1.7,3.3 c0,1.1,0.4,2.2,1.2,3c0.8,0.8,1.8,1.2,3,1.3c0,0,0,0,0,0c1.3,0,2.6-0.6,3.4-1.7c0.3-0.5,0.9-0.8,1.5-0.8c0.6,0,1.2,0.2,1.6,0.6 l0.2,0.2c0.6,0.6,0.8,1.5,0.4,2.3c-1.3,2.6-2,5.4-2,8.3c0,10.3,8.3,18.6,18.6,18.6c2.5,0,4.9-0.5,7.2-1.4c0.5-0.2,1-0.2,1.4,0h18.7 c0.7,0,1.4,0.4,1.8,1.1c0.3,0.7,0.3,1.5-0.1,2.1c-3,4.2-6.9,7.8-11.4,10.4C62.2,80.9,56.1,82.6,50,82.6z M19.7,39.1 c-0.7,2.6-1.1,5.4-1.1,8.2c0,11.2,6,21.6,15.8,27.2c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c2.8-1.6,5.4-3.7,7.6-6.1H58 c-2.6,1-5.3,1.5-8,1.5c-12.5,0-22.6-10.1-22.6-22.6c0-1.7,0.2-3.4,0.6-5.1c-0.6,0.1-1.1,0.2-1.7,0.2c-2.2,0-4.2-0.9-5.8-2.5 C20.2,39.6,20,39.4,19.7,39.1z M84.2,68.4H57.9c-1.1,0-2-0.9-2-2v-9.7c0-1.1,0.9-2,2-2h26.3c1.1,0,2,0.9,2,2v9.7 C86.2,67.5,85.3,68.4,84.2,68.4z M59.9,64.4h22.3v-5.7H59.9V64.4z M74.1,89.8H25.8c-0.7,0-1.4-0.4-1.8-1c-0.3-0.6-0.3-1.4,0.1-2 l7.6-11.6c0.6-0.9,1.7-1.2,2.7-0.6c4.7,2.7,10.1,4.1,15.5,4.1c5.5,0,10.8-1.4,15.5-4.1c0.9-0.5,2.1-0.2,2.7,0.6l7.6,11.6 c0.4,0.6,0.4,1.4,0.1,2C75.5,89.4,74.8,89.8,74.1,89.8z M29.5,85.8h40.9l-4.6-7c-4.9,2.5-10.3,3.8-15.9,3.8c-5.5,0-11-1.3-15.9-3.8 L29.5,85.8z"></path> </g> <g id="_x32_3"></g> <g id="_x32_4"></g> <g id="_x32_5"></g> </g></svg>
              <span className='boton__reserva__text'>Especialidades</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros