import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Odontologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_kinesiologia.jpg" alt="" />
      </div>
      <h1 className='especialidad__title'>Kinesiologia</h1>
      <ReservaDesktop/>
      <p className='especialidad__paragraph'>El/La Kinesiologa esta capacitado para resolver afecciones del territorio
musculoesqueletico y respiratorio, a demas del tratamiento rehabilitador de
secuelas de enfermedades de tipo neurologicas y/o cardiovasculares</p>

      <p className='especialidad__paragraph'>Todos nuestros profesionales kinesiologos se encuentran con registro en la
superintendencia de salud.</p>

      <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

      <ul className='especialidad__list'>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta de kinesiologia musculo-esqueletica</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta de kinesiologia respiratoria</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Terapia kinesiologica de rehabilitacion</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Procedimiento de flujo respiratorio (espirometria)</span>
        </li>
      </ul>

      <ReservaMobile />
    </div>
  )
}

export default Odontologia