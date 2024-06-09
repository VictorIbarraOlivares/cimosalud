import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function FonasaB() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/beneficiario-fonasa.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">CONVENIO GRUPO C</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        TRAMO C: Personas que perciben un ingreso imponible mensual mayor a $440.000.- y menor o igual a $642.400.-
        </span>
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 55% para Grupo C
        </p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ODONTOLOGIA GENERAL 55%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>CIRUGIA BUCAL 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ENDODONCIA 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ODONTOPEDIATRIA 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ORTODONCIA 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>REHABILITACIÓN ORAL 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>IMPLANTOLOGIA 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>FONOAUDIOLOGIA 50%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>PSICOLOGIA 45%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>PERIODONCIA 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>MASOTERAPIA 0%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ESTETICA FACIAL 25%</span>
          </li>
        </ul>

        <OpcionesFonasa />

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaB