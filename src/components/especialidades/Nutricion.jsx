import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Nutricion() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_nutricion.jpg" alt="" />
      </div>

      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Nutrición</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>El/la Nutricionista esta capacitada para resolver las patologias de
          malnutricion por exeso o deficit alimentario mediante tecnicas
          personalizadas a la vida diaria de la persona que consulta. A demas,
          resuleve condiciones originadas en el periodo de lactancia materna y sus
          derivados.</p>

        <p className='especialidad__paragraph'>Todos nuestros profesionales nutricionistas se encuentran con registro en la
          superintendencia de salud.</p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta nutricional adulto</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta nutricional infantil</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta clinica de lactancia</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Nutricion