import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function TerapiaOcupacional() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_psicologia.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">Terapia Ocupacional</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'></h1>
        <ReservaDesktop />

        <p className='especialidad__paragraph'>
        <span className='destacado'>Test Ados-2</span>, es un eslabón más en el diagnostico de niños, adolescentes y adultos con trastorno del espectro autista.
        </p>

        <p className='especialidad__paragraph'>
        Puede aplicarse en cualquier edad presentando tu orden de derivación.
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
        Certificación oficial en la aplicación de Test Ados-2
        </p>

        <OpcionesFonasa />
        <ReservaMobile />
      </div>
    </div>
  )
}

export default TerapiaOcupacional