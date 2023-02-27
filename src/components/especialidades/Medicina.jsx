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
        <h1 className='especialidad__title'>Medicina general</h1>

        <ReservaDesktop />

        <p className='especialidad__paragraph'>
          El Médico general de CIMO SALUD te proporcionará una atención
          integral de tipo ambulatoria para la resolución de las enfermedades o
          condiciones agudas y crónicas que te pueden llevar a consultar.
        </p>

        <p className='especialidad__paragraph'>
          Nuestros profesionales médicos se encuentran con registro en la
          superintendencia de salud además de su EUNACOM (examen teórico-
          práctico de medicina general) válidamente rendido y aprobado.
        </p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Medicina general adulto</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Medicina general infantil</span>
          </li>
        </ul>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Medicina