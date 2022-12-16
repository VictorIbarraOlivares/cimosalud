

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
              {/* <a href="#" class="card-button">
                Quiero saber mas
              </a> */}
            </div>
            <div className="card-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.948095951157!2d-70.76205052438073!3d-33.45065877338949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c3b23a6957fd%3A0xe25a71e8e9205807!2sClaudio%20Arrau%208750%2C%20Pudahuel%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1671159126607!5m2!1ses-419!2scl" className="map" ></iframe>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Footer