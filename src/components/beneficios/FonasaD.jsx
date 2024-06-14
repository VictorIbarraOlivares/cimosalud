import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import PorcentajesFonasa from '../buttons/PorcentajesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function FonasaB() {
  const options = [
    { text: 'Odontología general', percentage: '50%' },
    { text: 'Cirugia bucal', percentage: '30%' },
    { text: 'Endodoncia', percentage: '30%' },
    { text: 'Odontopediatria', percentage: '35%' },
    { text: 'Ortodoncia', percentage: '35%' },
    { text: 'Rehabilitación oral', percentage: '30%' },
    { text: 'Implantologia', percentage: '30%' },
    { text: 'Fonoaudiologia', percentage: '50%' },
    { text: 'Psicologia', percentage: '45%' },
    { text: 'Periodoncia', percentage: '30%' },
    { text: 'Masoterapia', percentage: '0%' },
    { text: 'Estetica facial', percentage: '25%' },
  ];

  return (
    <div className="especialidad__content">
      <div className='especialidad__image__content'>
        <img className='especialidad__image__medica' src="/images/beneficiario-fonasa.jpg" alt="" />
        <div className="especialidad__image__text__content">
            <span class="especialidad__image__text">CONVENIO GRUPO D</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        
        <ReservaDesktop />

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        TRAMO D
        </span>
        </p>

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Personas que perciben un ingreso imponible mensual mayor a $642.400.-
        </span>
        </p>

        <p className='especialidad__paragraph'>
        Nota: Con 3 o más cargas familiares pasará a Tramo C.
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 50% para Grupo D
        </p>

        <div className='content__btns__fonasa' >
          <PorcentajesFonasa  options={options} defaultText="Cobertura Tramo D"/>
          <OpcionesFonasa textButton="Selecciona tu tramo" />
        </div>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaB