import React from 'react'
import { faLocationDot, faPhone,faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <div>
      <div className="footer">
        {/* <div className="footer__logo">
          <div className='card__logo'>
            <div className='content__img__logo'>
              <img src="/images/logos/logo_250x172.png" alt="Logo de CIMO Salud" className='img__logo' />
            </div>
            <p className='logo__paragraph'>Nuestro objetivo es brindar atención de calidad de una manera cortés, respetuosa y compasiva. Esperamos que nos permita cuidarlo y nos esforzaremos, por ser la primera y mejor opción para el cuidado de la salud de su familia.</p>
            <a href="https://api.whatsapp.com/send?phone=56999609708&amp;text=Wuena CIMO SALUD !!!" target="_blank" rel="nofollow" className="logo__reserva">
                <FontAwesomeIcon icon={faBookMedical} className='card__logo__icon__reserva'/>
                <span className='card__fono__number'>Reserve una cita</span>
              </a>
          </div>
        </div>
        <div className="footer__card">
          <article className="card">
            <div className="card__container">
              <p className="card__title">Contacto</p>
              <p className="card__paragraph">Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.</p>

              <a href="tel:+56999609708" target="_blank" className="card__fono">
                <FontAwesomeIcon icon={faPhone} className="card__fono__icon"/>
                <span className='card__fono__number'>+56 9 9960 9708</span>
              </a>

              <p className="card__paragraph">Padre mariano #10, oficina 701. - Providencia, Santiago</p>

              <p className='card__paragraph card__paragraph__final'>
                <a href="https://maps.google.com/maps/dir//Padre+Mariano+10,+Edificio+PadreMariano+7500026+Santiago,+Providencia+Regi%C3%B3n+Metropolitana/@-33.4263319,-70.6159631,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9662cf6386fe6833:0x78c5a643711f0375" target="_blank" className='card__como__llegar__link'>
                  <FontAwesomeIcon icon={faLocationDot} className='card__icon__como__llegar'/>
                  <span className='card__como__llegar__paragraph'>Como llegar</span>
                </a>
              </p>
            </div>
            <div className="card__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8815685661307!2d-70.6185380243818!3d-33.426331873399086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6386fe6833%3A0x78c5a643711f0375!2sPadre%20Mariano%2010%2C%20Edificio%20PadreMariano%2C%207500026%20Santiago%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1672104456664!5m2!1ses!2scl" className="map" ></iframe>
            </div>
          </article>
        </div> */}
        <div className='footer__text'>
          <p>&#169; 2023 CIMO</p>
        </div>
        <div className='footer__icons'>
          <a href="https://www.facebook.com/profile.php?id=100090081942265" target="_blank" rel="nofollow" className="link__icons">
            <svg width="27px" height="27px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#00b495" stroke="#00b495"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m16 32c-8.8375 0-16-7.1625-16-16s7.1625-16 16-16 16 7.1625 16 16-7.1625 16-16 16zm4.43125-23.884375c-.553125-.078125-1.334375-.115625-2.340625-.115625-1.184375 0-2.13125.328125-2.84375.984375s-1.06875 1.58125-1.06875 2.771875v2.09375h-2.615625v2.84375h2.61875v7.2875h3.140625v-7.29375h2.60625l.4-2.840625h-3.00625v-1.815625c0-.4625.103125-.80625.309375-1.0375.20625-.228125.6-.34375 1.1875-.34375h1.6125z" fill="#ffffff" fill-rule="nonzero"></path> </g> </g></svg>
          </a>
          <a href="https://www.instagram.com/cimosalud.cl/?hl=es" target="_blank" rel="nofollow" className="link__icons">
            <svg width="27px" height="27px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#ffffff" fill-rule="nonzero"></path> </g> </g></svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=56932004779&amp;text=Hola CIMO SALUD, estuve revisando la pagina, y quisiera reservar una hora" target="_blank" rel="nofollow" className="link__icons">
          <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M128.00049,24a104.0281,104.0281,0,0,0-91.189,154.041l-8.54687,29.915A15.99944,15.99944,0,0,0,48.044,227.73635l29.916-8.54688A104.00728,104.00728,0,1,0,128.00049,24ZM152.125,192c-.0293.02344-.084,0-.126,0A87.99949,87.99949,0,0,1,64,103.876,36.01385,36.01385,0,0,1,100,68,14.92643,14.92643,0,0,1,112.93066,75.503l11.69092,20.46094a16.01674,16.01674,0,0,1-.17187,16.16992l-7.11084,11.85156a40.03607,40.03607,0,0,0,14.67627,14.67676l11.85107-7.11133a16.01883,16.01883,0,0,1,16.17041-.17285l20.45947,11.69141A14.9238,14.9238,0,0,1,188,156,36.01427,36.01427,0,0,1,152.125,192Z"></path> <path d="M136.4502,154.6592a7.99584,7.99584,0,0,1-7.397.43652,56.03179,56.03179,0,0,1-28.14892-28.14843,7.99972,7.99972,0,0,1,.43652-7.39746l9.38867-15.64844L99.36328,84.00979A19.99027,19.99027,0,0,0,80,103.89748,72.00036,72.00036,0,0,0,152,176h.10254a19.99027,19.99027,0,0,0,19.88769-19.36328l-19.8916-11.36621Z"></path> </g> </g></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer