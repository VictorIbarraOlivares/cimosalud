import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Odontologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_odontologia.jpg" alt="" />
      </div>

      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Odontología</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
          El Odontólogo de CIMO SALUD esta capacitado para resolver las
          enfermedades del territorio maxilofacial y que son afectadas por otras
          de tipo sistémico (Diabetes Mellitus, Hipertensión, hipotiroidismo)
        </p>

        <p className='especialidad__paragraph'>
          Todos nuestros profesionales odontólogos se encuentran con registro
          en la superintendencia de salud.
        </p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta de urgencias odontológicas</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Control radiográfico digital</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Odontología general infantil</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Ortodoncia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Rehabilitación</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Cirugía</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Endodoncia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Implantología</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Odontologia