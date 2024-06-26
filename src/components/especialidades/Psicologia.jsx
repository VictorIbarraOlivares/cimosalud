import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Psicologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_psicologia.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">Psicología</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'></h1>
        <ReservaDesktop />

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta de psicología adulto</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta de psicología infantil</span>
          </li>
        </ul>

        <OpcionesFonasa />
        <ReservaMobile />
      </div>
    </div>
  )
}

export default Psicologia