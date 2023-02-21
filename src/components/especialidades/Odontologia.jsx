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
      <h1 className='especialidad__title'>Odontología</h1>
      <ReservaDesktop />
      <p className='especialidad__paragraph'>El/La Cirujano Dentista esta capacitado para resolver las enfermedades del
territorio maxilofacial y que son afectadas por otras de tipo sistemico
(Diabetes Mellitus, Hipertencion, hipotiroidismo)</p>

      <p className='especialidad__paragraph'>Todos nuestros profesionales odontologos se encuentran con registro en la
superintendencia de salud.</p>

      <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

      <ul className='especialidad__list'>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta de urgencias odontologicas</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Control radiografico digital</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Odontología general adulto</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Odontologia general infantil</span>
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
          <span className='especialidad__list__detail'>Cirugia</span>
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
  )
}

export default Odontologia