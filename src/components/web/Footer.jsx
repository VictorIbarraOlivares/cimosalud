

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__logo">
          <p>Logo</p>
        </div>
        <div className="footer__card">
          <article className="card">

            <div className="card-container">
              <p className="card-title">Contactos</p>
              <p className="card-paragraph">Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p>
              <a href="tel:+56999609708" target="_blank" class="card-fono">
                <span>+56 9 9960 9708</span>
              </a>
              <p className="card-paragraph">Padre mariano #10, oficina 701. - Providencia, Santiago</p>
            </div>
            <div className="card-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8815685661307!2d-70.6185380243818!3d-33.426331873399086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6386fe6833%3A0x78c5a643711f0375!2sPadre%20Mariano%2010%2C%20Edificio%20PadreMariano%2C%207500026%20Santiago%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1672104456664!5m2!1ses!2scl" className="map" ></iframe>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Footer