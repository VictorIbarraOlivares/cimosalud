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
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Kinesiología</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
          El profesional Kinesiólogo de CIMO SALUD te proporcionará una
          atención integral para la prevención, conservación, evaluación y
          tratamiento ante afecciones musculoesquelética, respiratorias y de
          neurorrehabilitación. Las que se pueden complementar con sesiones
          de masoterapia y auriculoterapia.
        </p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta de kinesiología musculo-esquelética</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta de kinesiología respiratoria</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Masoterapia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Auriculoterapia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Espirometría</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Odontologia