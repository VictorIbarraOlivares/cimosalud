import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Odontologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_odontologia.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">Odontología</span>
        </div>
      </div>

      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'></h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
        Un tratamiento realizado por especialistas puede garantizar el éxito en tu diagnóstico y en como resuelves esa condición, somos expertos en la resolución de patologías y casos de alta complejidad.
        </p>

        <OpcionesFonasa />
        <ReservaMobile />
      </div>
    </div>
  )
}

export default Odontologia