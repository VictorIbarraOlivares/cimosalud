import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function FonasaA() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/beneficiario-fonasa.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">CONVENIO GRUPO A</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Tramo A: Personas que no tienen un trabajo formal o c n contrato , o bien personas que no se impongan de manera individual en el sistema de salud. Personas que perciben subsidio familiar (Ley 18. 020).
        </span>
        </p>

        <p className='especialidad__paragraph'>
        Si perteneces al tramo A, aquí en CIMO SALUD automáticamente ingresas al beneficio en el arancel, es decir, no serás considerado como paciente particular, y podrás obtener el porcentaje mayor de beneficios y bonificación.
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 60% para Grupo A
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

export default FonasaA