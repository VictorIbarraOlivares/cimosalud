import '../../App.css'
import '../../Especialidades.css'
import ReservaDesktop from '../buttons/ReservaDesktop'
import ReservaMobile from '../buttons/ReservaMobile'
import { Link } from 'react-router-dom';

function FonasaOrtodoncia() {
  return (
    <div className="especialidad__content">
      {/* <div className='especialidad__image_content'>
        <img className='especialidad__image__medica' src="/images/especialidades/area_nutricion.jpg" alt="" />
      </div> */}

      <div className='especialidad__text__content'>
        <h1 className='especialidad__title'>Fonasa Ortodoncia</h1>
        <ReservaDesktop />
        <p className='especialidad__paragraph'>
            En CIMOSALUD, <span className='destacado'>Los afiliados a FONASA TRAMO A y TRAMO B</span> pueden resolver necesidades de ortodoncia en nuestro centro de atención en Providencia.
        </p>

        <p className='especialidad__paragraph principal_color'>
        Las personas afiliadas a FONASA, que pertenezcan a los tramos A o B, pueden atenderse en nuestro Centro Médico en el área de Ortodoncia con una bonificación en el arancel de un 60% de descuento en la instalación de ortodoncia y actividades de odontología general.
        </p>

        <p className='especialidad__paragraph'>
            Para hacer efectiva la atención deberás realizar la solicitud mediante la Pagina web (<Link to="/" className="brand__title__link" onClick={() => setOpenHamburguer(false)}>https://cimosalud.cl</Link>) o mediante WhatsApp al (<a href="https://api.whatsapp.com/send?phone=56932004779&amp;text=Hola! Estuve revisando la página web, tengo algunas dudas. ¿Podrían ayudarme?" target="_blank" rel="nofollow" >+56932004779</a>)
        </p>

        <h2 className='especialidad__title__two'>SERVICIOS PARA TUS NECESIDADES DE SALUD Y BIENESTAR</h2>

        <p className='especialidad__paragraph'>
            En <span className='destacado'>CIMOSALUD</span> contamos con una amplia variedad de atenciones dentales para adultos y niños y de <span className='destacado'>especialidades odontológicas</span>, consultas y tratamientos de <span className='destacado'>fonoaudiología, kinesiología, Nutrición, Psicología además de Masoterapia, Reflexología y Terapia Floral</span> para que puedas recibir la atención que necesitas con un enfoque médico y terapéutico. 
        </p>

        <h3 className='especialidad__title__three'>¿CÓMO ACCEDER A UNA ATENCIÓN EN CIMOSALUD?</h3>
        <p className='especialidad__paragraph'>
        Ingresa a reservar una hora en <Link to="/" className="brand__title__link" onClick={() => setOpenHamburguer(false)}>www.cimosalud.cl</Link> o al WhatsApp <a href="https://api.whatsapp.com/send?phone=56932004779&amp;text=Hola! Estuve revisando la página web, tengo algunas dudas. ¿Podrían ayudarme?" target="_blank" rel="nofollow" >+56932004779</a>
        </p>
        <p className='especialidad__paragraph'>
        Selecciona o indica el servicio que necesitas agendar.
        </p>
        <p className='especialidad__paragraph'>
        Confirma tu asistencia cuando te contactemos.
        </p>

        <h2 className='especialidad__title__two'>LA INFORMACION A TU ALCANCE</h2>
        <p className='especialidad__paragraph'>
        Los adherentes al convenio serán todas las personas que soliciten atención y que tengan algún diagnostico referente a la necesidad de utilizar aparatología fija con fines ortodónticos y que  pertenezcan a los tramos A y B del Fondo Nacional de Salud. 
        </p>
        <p className='especialidad__paragraph'>
        Existirá un <span className='destacado'>60% de bonificación</span> en el arancel de CIMOSALUD para cubrir el proceso de <span className='destacado'>instalación de ortodoncia convencional metálica</span>, y las respectivas actividades o procedimientos clínicos de odontología general y que sean requeridos para ese fin.
        </p>
        <p className='especialidad__paragraph'>
        Entiéndase por procedimientos de odontología general exclusivamente a aquellas necesarias para lograr un alta gingival y restauradora que garanticen el paso para la especialidad de ortodoncia.
        </p>
        <p className='especialidad__paragraph'>
        Los procedimientos que tendrán una <span className='destacado'>bonificación del 60%</span> de descuento para otorgar el pase a ortodoncia serán: 
        </p>
        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Limpieza</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Restauraciones (Obturaciones/tapaduras)</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Sellantes y Flúor.</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Exodoncia de Premolares.</span>
          </li>
        </ul>
        <p className='especialidad__paragraph'>
        En el contexto de garantizar un aumento en las posibilidades de acceso a tratamientos de ortodoncia, se incluirá un ajuste para <span className='destacado'>reducir los aranceles</span> de las prestaciones que involucran la continuidad de tratamiento y otras de carácter resolutivo en urgencias y o quirúrgicas. Esto significa que se bonificaran las actividades de: 
        </p>
        <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Controles de Ortodoncia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Retiro de Ortodoncia</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Reposición de Brackets</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Extracciones complejas, de terceros molares (muelas del juicio) erupcionados</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Extracciones de dientes incluidos y semi-incluidos</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Derecho a pabellón</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Radiografías intraorales</span>
          </li>
        </ul>
        {/* <p className='especialidad__paragraph'>
        Los Nutricionistas de CIMO SALUD te proporcionará la resolución de
las patologías de malnutrición por exceso o déficit alimentario
mediante técnicas personalizadas a la vida diaria de la persona que
consulta y los requerimientos de la misma a lo largo del ciclo vital.
          </p>

        <p className='especialidad__paragraph'>
        Todos nuestros profesionales nutricionistas se encuentran con registro
en la superintendencia de salud.
          </p>

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
        </ul> */}

        <ReservaMobile />
      </div>
    </div>
  )
}

export default FonasaOrtodoncia