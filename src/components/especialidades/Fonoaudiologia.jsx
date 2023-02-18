import '../../App.css'
import '../../Especialidades.css'
import ReservaMobile from '../buttons/ReservaMobile'

function Fonoaudiologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_fonoaudiologia.jpg" alt="" />
      </div>
      <h1 className='especialidad__title'>Fonoaudiología</h1>
      <div className='content__reserva__desktop'>
        <a href="https://api.whatsapp.com/send?phone=56932004779&amp;text=Hola CIMO SALUD, estuve revisando la pagina, y quisiera reservar una hora" target="_blank" rel="nofollow" className="boton__reserva__desktop">
          <svg  className='svg__reserva__white' fill="#fff" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
          <svg className='svg__reserva__green' fill="#00b495" width="34px" height="34px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#00b495"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path> <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path> <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path> </g> </g></svg>
          <span className='boton__reserva__text'>Reserva de horas</span>
        </a>
      </div>
      <p className='especialidad__paragraph'>El/La Fonoaudiologa esta capacitada para la resolucion de problemas
asociados al habla, voz, lenguaje y audicion, a demas del tratamiento
rehabilitador de secuelas de enfermedades de tipo neurologicas y/o
cardiovasculares</p>

      <p className='especialidad__paragraph'>Todos nuestros profesionales fonoaudiologos se encuentran con registro en la
superintendencia de salud.</p>

      <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

      <ul className='especialidad__list'>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta fonoaudiologia voz</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta fonoaudilogia habla</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta fonoaudiologia lenguaje</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Rehabilitacion fonoaudiologica</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Procedimiento de extraccion de cerumen (lavado de oidos)</span>
        </li>
      </ul>

      <ReservaMobile />
    </div>
  )
}

export default Fonoaudiologia