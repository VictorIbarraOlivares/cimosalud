import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Fonoaudiologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_fonoaudiologia.jpg" alt="" />
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Fonoaudiología</h1>
        <ReservaDesktop />
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
    </div>
  )
}

export default Fonoaudiologia