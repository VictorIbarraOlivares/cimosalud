import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function Fonasa() {
  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/beneficiario-fonasa.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">BENEFICIARIO FONASA</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />

        <p className='especialidad__paragraph'>
        Si estas afiliado a Fonasa, en CIMO SALUD te entregamos garantías de acceso y oportunidades, pudiendo acceder a una bonificación en los aranceles.
        </p>

        <p className='especialidad__paragraph'>
        El copago será inferior y diferente al de la Red de Modalidad de Libre Elección o del Sistema Privado de Salud. Aumentando las posibilidades de acceso a las atenciones médicas requeridas.
        </p>
        <p className='especialidad__paragraph'>
        Podrás acceder a la bonificación en todas las especialidades suscritas en este centromédico, el porcentaje de bonificación y copago variará según el grupo al que perteneces.
        </p>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Fonasa