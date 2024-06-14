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
        <h1 className='especialidad__title'>Masoterapia</h1>

        <ReservaDesktop />

        <p className='especialidad__paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed recusandae in iste quaerat provident similique modi hic itaque accusantium. Quam tempore voluptas nemo aut optio eum cumque officiis perspiciatis provident?
        </p>

        <p className='especialidad__paragraph'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, reprehenderit est possimus deleniti qui placeat eos excepturi ipsa! Quis enim dolore quaerat cumque, temporibus magni ad commodi aliquam quas error.
        </p>

        <p className='especialidad__title__list'>Las áreas que puedes consultar son:</p>

        {/* <ul className='especialidad__list'>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Medicina general adulto</span>
          </li>
          <li>
            <span className='list__style'>&gt;&gt;</span>
            <span className='especialidad__list__detail'>Medicina general infantil</span>
          </li>
        </ul> */}

        <ReservaMobile />
      </div>
    </div>
  )
}

export default Medicina