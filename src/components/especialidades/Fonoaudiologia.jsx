import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'

function Fonoaudiologia() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_fonoaudiologia.jpg" alt="" />
      </div>
      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Fonoaudiología</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
          El Fonoaudiólogo de CIMO SALUD te proporcionará una atención
          integral, para la resolución de alteraciones del lenguaje, habla, voz,
          audición, deglución y/o motricidad orofacial (respiración, succión y
          masticación) a lo largo del ciclo vital.
        </p>

        <p className='especialidad__paragraph'>
          Nuestros profesionales fonoaudiólogos se encuentran con registro en
          la superintendencia de salud.
        </p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta fonoaudiología infanto-juvenil</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Consulta fonoaudiología adultos</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Lavado de oídos</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Fonoaudiologia