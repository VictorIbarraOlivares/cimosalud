
function Inicio() {
  return (
    <div>
      <div className='background__image'>
        <h1 className="title__inicio" >Centro Integral Medico y Odontológico</h1>
      </div>
      <div className="info__principal">
        <div className="card__info">
          <div className="card__info__img">
            <a href="https://api.whatsapp.com/send?phone=56999609708"  target="_blank" rel="nofollow" className="card__info__link">
              <img src="images/llamada-de-emergencia.jpg" alt="Icono de llamda" className='img__info' />
            </a>
          </div>
          <p className="card__info__title">¿Conversemos?</p>
          <p className="card__info__paragraph">Escríbenos por Whatsapp<br/>+56 9 9960 9708</p>
        </div>
        <div className="card__info">
          <div className="card__info__img">
              <img src="images/bolsa-de-dinero.jpg" alt="Icono de bolsa de dinero" className='img__info' />
          </div>
          <p className="card__info__title">Cotiza tu Tratamiento</p>
          <p className="card__info__paragraph">Escríbenos a nuestro mail <br /> contacto@cimosalud.cl</p>
        </div>

        <div className="card__info">
          <div className="card__info__img">
              <img src="images/reloj.jpg" alt="Icono de reloj" className='img__info' />
          </div>
          <p className="card__info__title">Nuestros Horarios</p>
          <p className="card__info__paragraph">Nuestra sucursal atiende de <br /> Lunes a Sábado de 10:00 a 19:00 Hrs.</p>
        </div>

        <div className="card__info">
          <div className="card__info__img">
            <a href="https://maps.google.com/maps/dir//Padre+Mariano+10,+Edificio+PadreMariano+7500026+Santiago,+Providencia+Regi%C3%B3n+Metropolitana/@-33.4263319,-70.6159631,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9662cf6386fe6833:0x78c5a643711f0375" target="_blank" rel="nofollow" className="card__info__link">
              <img src="images/destino.jpg" alt="Icono de destino de viaje" className='img__info' />
            </a>
          </div>
          <p className="card__info__title">Visitanos</p>
          <p className="card__info__paragraph">Estamos en Padre mariano #10, oficina 701 - Providencia, Santiago <br /> A pasos del Metro Pedro de Valdivia L1</p>
        </div>
      </div>
    </div>
  )
}

export default Inicio