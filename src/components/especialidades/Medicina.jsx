import '../../App.css'
import '../../Especialidades.css'
function Medicina() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_medica.jpg" alt="" />
      </div>
      <h1 className='especialidad__title'>Medicina General</h1>
      <p className='especialidad__paragraph'>El/La Medico cirujano esta capacitado para la resolucion de enfermedades de origen infecciosos, viral, de tipo agudo y cronico.</p>

      <p className='especialidad__paragraph'>Nuestros profesionales medicos se encuentran con registro en la superintendencia de salud a demas de su EUNACOM (examen teórico-práctico de medicina general) válidamente rendido y aprobado.</p>

      <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

      <ul className='especialidad__list'>
        <li>
          <span className='list__style'>>></span>
          <span className='especialidad__list__detail'>CONSULTA MEDICINA GENERAL</span>
        </li>
        <li>
          <span className='list__style'>>></span>
          <span className='especialidad__list__detail'>CONTROL INFANTIL</span>
        </li>
        <li>
          <span className='list__style'>>></span>
          <span className='especialidad__list__detail'>CONTROL CARDIOVASCULAR</span>
        </li>
        <li>
          <span className='list__style'>>></span>
          <span className='especialidad__list__detail'>CONTROL SALUD MENTAL</span>
        </li>
        <li>
          <span className='list__style'>>></span>
          <span className='especialidad__list__detail'>ELECTROCARDIOGRAMA</span>
        </li>
      </ul>
    </div>
  )
}

export default Medicina