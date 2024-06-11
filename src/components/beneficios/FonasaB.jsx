import '../../App.css'
import '../../Especialidades.css'
import PorcentajesFonasa from '../buttons/PorcentajesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function FonasaB() {
  const options = [
    { text: 'Odontología general', percentage: '60%' },
    { text: 'Cirugia bucal', percentage: '35%' },
    { text: 'Endodoncia', percentage: '30%' },
    { text: 'Odontopediatria', percentage: '40%' },
    { text: 'Ortodoncia', percentage: '35%' },
    { text: 'Rehabilitación oral', percentage: '40%' },
    { text: 'Implantologia', percentage: '35%' },
    { text: 'Fonoaudiologia', percentage: '50%' },
    { text: 'Psicologia', percentage: '50%' },
    { text: 'Periodoncia', percentage: '35%' },
    { text: 'Masoterapia', percentage: '0%' },
    { text: 'Estetica facial', percentage: '30%' },
  ];

  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/beneficiario-fonasa.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">CONVENIO GRUPO B</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Tramo B
        </span>
        </p>

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Personas que perciben un ingreso imponible mensual menor o igual a $440.000.-
        </span>
        </p>

        <p className='especialidad__paragraph'>
        Para efectos de sistema, el tramo A y el Tramo B tienen el mismo porcentaje de bonificación, es decir que la cobertura en ambos casos puede llegar hasta el 60%
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 60% para Grupo B
        </p>

        <PorcentajesFonasa  options={options} defaultText="Cobertura FONASA"/>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaB