import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function Medicina() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_medica.jpg" alt="" />
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Medicina General</h1>

        <ReservaDesktop />

        <p className='especialidad__paragraph'>El/La Medico cirujano esta capacitado para la resolucion de enfermedades de origen infecciosos, viral, de tipo agudo y cronico. </p>

        <p className='especialidad__paragraph'>Nuestros profesionales medicos se encuentran con registro en la superintendencia de salud a demas de su EUNACOM (examen teórico-práctico de medicina general) válidamente rendido y aprobado.</p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta medicina general</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Control infantil</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Control cardiovascular</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Control salud mental</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Electrocardiograma</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Medicina