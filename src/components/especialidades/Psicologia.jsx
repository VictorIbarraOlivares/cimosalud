import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Psicologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_psicologia.jpg" alt="" />
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Psicología</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
          El psicólogo de CIMO SALUD tiene como objetivo ayudar al paciente
          con sus problemáticas, para así alcanzar el bienestar en todos los
          niveles. Comprendiendo y analizando la complejidad y diversidad del
          problema por el que se consulta.
        </p>

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

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Psicologia