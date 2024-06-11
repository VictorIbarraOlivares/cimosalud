import '../../App.css'
import '../../Especialidades.css'
import OpcionesFonasa from '../buttons/OpcionesFonasa'
import PorcentajesFonasa from '../buttons/PorcentajesFonasa'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
function FonasaA() {
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
            <span class="especialidad__image__text">CONVENIO GRUPO A</span>
        </div>
      </div>
      <div className='especialidad__text__content'>
        

        <ReservaDesktop />
        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Tramo A
        </span>
        </p>

        <p className='especialidad__paragraph bolder'>
        <span className='destacado'>
        Personas que no tienen un trabajo formal o contrato, o bien personas que no se impongan de manera individual en el sistema de salud. Personas que perciben subsidio familiar (Ley 18. 020).
        </span>
        </p>

        <p className='especialidad__paragraph'>
        Si perteneces al tramo A, aquí en CIMO SALUD automáticamente ingresas al beneficio en el arancel, es decir, no serás considerado como paciente particular, y podrás obtener el porcentaje mayor de beneficios y bonificación.
        </p>

        <p className='especialidad__paragraph fonasa__paragraph'>
          Cobertura FONASA hasta 60% para Grupo A
        </p>

        <PorcentajesFonasa  options={options} defaultText="Cobertura FONASA"/>

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaA