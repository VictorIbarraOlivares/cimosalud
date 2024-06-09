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
            <span class="especialidad__image__text">CONVENIO GRUPO B</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Tramo B personas que perciben un ingreso imponible mensual menor o igual a $440.000.-
        </span>
        </p>

        <p className='especialidad__paragraph'>
        Para efectos de sistema, el tramo A y el Tramo B tienen el mismo porcentaje de bonificación, es decir que la cobertura en ambos casos puede llegar hasta el 60%
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 60% para Grupo B
        </p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ODONTOLOGIA GENERAL 60%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>CIRUGIA BUCAL 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ENDODONCIA 30%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ODONTOPEDIATRIA 40%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ORTODONCIA 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>REHABILITACIÓN ORAL 40%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>IMPLANTOLOGIA 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>FONOAUDIOLOGIA 50%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>PSICOLOGIA 50%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>PERIODONCIA 35%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>MASOTERAPIA 0%</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>ESTETICA FACIAL 30%</span>
          </li>
        </ul>

        <OpcionesFonasa />

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaB