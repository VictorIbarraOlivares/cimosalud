import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Psicologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_psicologia.jpg" alt="" />
      </div>
      <h1 className='especialidad__title'>Psicología</h1>
      <ReservaDesktop />
      <p className='especialidad__paragraph'>El/La psicologa esta capacitada para mejorar el bienestar biosicosocial de la
persona, comprendiendo y analizando la complejidad y diversidad del
problema por el que se consulta.</p>

      <p className='especialidad__paragraph'>Todos nuestros profesionales psicologos se encuentran con registro en la
superintendencia de salud.</p>

      <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

      <ul className='especialidad__list'>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta de psicologia adulto</span>
        </li>
        <li>
          <span className='list__style'>&gt;&gt;</span>
          <span className='especialidad__list__detail'>Consulta de psicologia infantil</span>
        </li>
      </ul>

      <ReservaMobile />
    </div>
  )
}

export default Psicologia