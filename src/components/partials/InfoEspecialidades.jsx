import { Link } from 'react-router-dom'
function InfoEspecialidades() {
    return (
        <div className='info__especialidades'>
            <p className='info__especialidades__paragraph'>Nuestras especialidades</p>

            <div className='content__especialidades'>
                <div className='card__especialidades'>
                    <Link to="/especialidades/medicina-general" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' width="65px" height="65px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="ic-medicine-heart-hear"> <path className="cls-1" d="M13,3h3V7a6,6,0,0,1-6,6h0A6,6,0,0,1,4,7V3H7"></path> <path className="cls-1" d="M10,13v4.5A4.49,4.49,0,0,0,14.5,22h0A4.49,4.49,0,0,0,19,17.5V15"></path> <circle className="cls-1" cx="19" cy="13" r="2"></circle> </g> </g></svg>
                        Medicina General
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/especialidades/odontologia" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' width="65px" height="65px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.533 8.19283C13.4135 8.35138 11.3752 9.55942 9.45486 11.8803C7.74575 13.946 7.72475 17.1863 8.45959 20.8219C8.81881 22.5991 9.3398 24.385 9.85289 26.047C9.96736 26.4178 10.0822 26.7847 10.1949 27.1448C10.5799 28.3746 10.9401 29.5254 11.1763 30.4829C12.359 35.2753 13.4355 37.9765 15.7523 39.9172C15.8594 40.0069 15.9056 40.002 15.9315 39.9993L15.9344 39.999C16.0031 39.9921 16.1582 39.9468 16.4166 39.7582C16.9504 39.3689 17.5591 38.6505 18.2862 37.7331C18.3832 37.6108 18.4819 37.4854 18.5823 37.3579C19.1921 36.5834 19.8611 35.7335 20.5406 35.0567C21.2978 34.3025 22.2979 33.5197 23.4762 33.5161C24.6517 33.5126 25.644 34.3023 26.3879 35.0535C27.0571 35.7292 27.7164 36.5787 28.3174 37.3532C28.4169 37.4814 28.5148 37.6075 28.6109 37.7305C29.3286 38.6489 29.9297 39.3681 30.457 39.758C30.7124 39.9468 30.8639 39.9909 30.9281 39.9975C30.9291 39.9976 30.9303 39.9977 30.9314 39.9979C30.9527 40.0004 30.9956 40.0055 31.0993 39.9184C32.1293 39.0523 32.7927 38.3629 33.3528 37.4301C33.9257 36.4761 34.4217 35.2157 35.0275 33.1616C35.1838 32.6319 35.7398 32.3291 36.2696 32.4853C36.7993 32.6416 37.1021 33.1976 36.9458 33.7274C36.3268 35.8263 35.7739 37.2833 35.0675 38.4597C34.3484 39.6572 33.5022 40.511 32.3864 41.4492C31.9015 41.8569 31.3312 42.0494 30.7237 41.987C30.1604 41.9292 29.6688 41.6625 29.268 41.3662C28.4827 40.7856 27.7182 39.8363 27.035 38.9619C26.9305 38.8282 26.8272 38.6952 26.7248 38.5634C26.1173 37.7815 25.5436 37.0431 24.9669 36.4609C24.257 35.7441 23.7779 35.5152 23.4822 35.5161C23.1655 35.5171 22.6707 35.7578 21.952 36.4737C21.3656 37.0579 20.7825 37.7976 20.1661 38.5797C20.0629 38.7106 19.9588 38.8427 19.8536 38.9754C19.1611 39.8492 18.3876 40.7961 17.5952 41.3741C17.1906 41.6692 16.6967 41.9329 16.1327 41.9891C15.5254 42.0497 14.9546 41.8579 14.4681 41.4504C11.6136 39.0593 10.4223 35.775 9.23458 30.962C9.01446 30.07 8.68046 29.0027 8.30017 27.7873C8.1844 27.4173 8.06433 27.0336 7.94188 26.637C7.42488 24.9623 6.87916 23.0977 6.49924 21.2181C5.75581 17.5401 5.56689 13.442 7.91394 10.6054C10.0498 8.02402 12.5461 6.41068 15.3838 6.19841C18.0239 6.00092 20.7585 7.03147 23.5406 9.23855C23.7928 9.06675 24.1117 8.85911 24.4866 8.63427C25.4678 8.04585 26.8538 7.3271 28.4497 6.83104C31.6484 5.8368 35.8664 5.70688 39.1853 9.53774C40.9222 11.5425 41.7426 13.6227 41.9474 15.7273C42.1499 17.8093 41.7443 19.8565 41.1288 21.8017C40.9622 22.3283 40.4003 22.6201 39.8737 22.4535C39.3472 22.2868 39.0554 21.7249 39.222 21.1984C39.797 19.3812 40.1227 17.6262 39.9568 15.9209C39.7931 14.2382 39.1453 12.5458 37.6738 10.8474C35.0775 7.85069 31.8307 7.87452 29.0434 8.74091C27.6463 9.17517 26.409 9.81346 25.5152 10.3495C25.0704 10.6163 24.7157 10.8546 24.4747 11.0243C24.3544 11.1091 24.2627 11.1766 24.2026 11.2216C24.1726 11.2442 24.1505 11.261 24.1367 11.2717L24.1223 11.2829L24.1206 11.2842C24.1204 11.2843 24.1203 11.2844 24.1201 11.2845C24.1203 11.2844 24.1206 11.2842 23.5 10.5M15.533 8.19283C17.658 8.03388 20.0967 8.91218 22.8511 11.261L15.533 8.19283ZM22.8511 11.261C23.2143 11.5707 23.7457 11.5805 24.1201 11.2845L22.8511 11.261Z" fill="#00b495"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7261 9.86677C23.0758 9.43932 23.7058 9.37632 24.1333 9.72605L29.6333 14.226C30.0607 14.5758 30.1237 15.2058 29.774 15.6332C29.4243 16.0607 28.7942 16.1237 28.3668 15.774L22.8668 11.274C22.4393 10.9242 22.3763 10.2942 22.7261 9.86677Z" fill="#00b495"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M33 33C36.866 33 40 29.866 40 26C40 22.134 36.866 19 33 19C29.134 19 26 22.134 26 26C26 29.866 29.134 33 33 33ZM33 35C37.9706 35 42 30.9706 42 26C42 21.0294 37.9706 17 33 17C28.0294 17 24 21.0294 24 26C24 30.9706 28.0294 35 33 35Z" fill="#00b495"></path> <path d="M32 22C32 21.4477 32.4477 21 33 21C33.5523 21 34 21.4477 34 22V30C34 30.5523 33.5523 31 33 31C32.4477 31 32 30.5523 32 30V22Z" fill="#00b495"></path> <path d="M29 27C28.4477 27 28 26.5523 28 26C28 25.4477 28.4477 25 29 25L37 25C37.5523 25 38 25.4477 38 26C38 26.5523 37.5523 27 37 27L29 27Z" fill="#00b495"></path> </g></svg>
                        Odontología
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/especialidades/kinesiologia" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon iconify iconify--medical-icon' width="70px" height="70px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#00b495"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M30.827 19.223a5.887 5.887 0 0 0 5.892-5.881a5.884 5.884 0 0 0-5.892-5.879c-3.255 0-5.893 2.632-5.893 5.879a5.889 5.889 0 0 0 5.893 5.881z" fill="#00b495"></path><path d="M48.78 58.98H1.806c-1.323 0-1.187 1.04-1.187 1.04v1.731S.499 64 2.809 64h58.817c2.325 0 2.199-2.197 2.199-2.197v-4.794s-.197-1.516-1.98-1.516h-5.732c-1.965 0-3.589 3.486-7.332 3.486z" fill="#00b495"></path><path d="M53.348 48.358c0 2.922 2.378 5.295 5.308 5.295c2.929 0 5.313-2.374 5.313-5.295c0-2.933-2.384-5.297-5.313-5.297a5.298 5.298 0 0 0-5.308 5.297z" fill="#00b495"></path><path d="M35.997 38.255a3.77 3.77 0 0 1-2.269 2.36l-4.727 1.753l1.744 1.731h7.98l-.005-12.215l-2.671 6.297c-.013.03-.037.047-.053.074z" fill="#00b495"></path><path d="M47.458 47.001h-16.5l-3.978-3.884l-2.769 1.02c-2.054.735-4.555-.387-5.326-2.428c-.454-1.267-.391-2.682.367-3.713c-.339-.015-10.007 0-10.007 0a2.906 2.906 0 0 0-2.915 2.898c0 1.607 1.307 2.863 2.915 2.863h9.843l3.903 5.909L2.84 51.285a2.909 2.909 0 0 0 .651 5.745l22.609.003a4.133 4.133 0 0 1-.629-2.177a4.176 4.176 0 0 1 4.173-4.173h9.046l7.331-1.531l.407 1.947l-7.533 1.573h-9.252a2.18 2.18 0 0 0-.044 4.361l17.898.002a5.014 5.014 0 0 0 4.992-5.013A5.023 5.023 0 0 0 47.458 47z" fill="#00b495"></path><path d="M23.862 42.315a2.309 2.309 0 0 1-3.038-1.185a2.303 2.303 0 0 1 1.187-3.04l8.401-3.154l2.596-6.192l-1.692-.625l-2.207 5.302l-6.395 2.355v-6.482l-6.251 6.827l-7.074-.007s12.379-13.57 12.766-13.976c.513-.509 1.686-1.353 3.898-1.353h7.949c4.516 0 5.385 4.502 4.461 6.832l-4.157 10.082a2.344 2.344 0 0 1-1.338 1.261l-9.106 3.353z" fill="#00b495"></path></g></svg>
                        Kinesiología
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/especialidades/fonoaudiologia" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' height="65px" width="65px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path className="st0" d="M460.292,450.719l-0.905-0.095c0.08,0.072-0.667,2.741-3.163,5.959c-3.671,4.902-10.694,10.964-19.68,15.398 c-9.002,4.489-19.879,7.484-31.63,7.476c-13.706-0.04-28.698-3.893-44.707-14.968c-15.334-10.702-23.28-19.276-28.578-27.904 c-3.973-6.523-6.65-13.499-9.209-22.5c-3.838-13.436-7.134-31.161-14.293-54.321c-7.174-23.184-18.274-51.707-37.835-87.666 c-15.604-28.562-29-71.164-28.912-111.494c0-16.915,2.288-33.409,7.389-48.481c5.116-15.095,12.959-28.777,24.368-40.631 c26.982-27.872,58.095-38.867,87.683-38.947c21.412-0.016,41.958,5.982,58.618,16.041c16.701,10.05,29.334,24.026,35.786,39.574 l30.032-12.521c-9.582-22.962-27.236-41.792-49.022-54.933C414.409,7.572,388.261,0.016,360.819,0 c-37.843-0.08-78.292,14.762-111.105,48.91c-15.024,15.556-25.337,33.719-31.773,52.788c-6.451,19.084-9.096,39.082-9.104,58.905 c0.095,47.329,14.849,93.721,32.868,127.035c16.518,30.406,26.37,54.52,32.996,74.462c4.965,14.969,8.128,27.602,10.9,39.082 c4.188,17.114,7.397,32.194,15.414,47.377c3.996,7.532,9.185,14.841,15.85,21.873c6.674,7.039,14.778,13.824,24.757,20.768 c21.094,14.723,43.19,20.848,63.291,20.8c23.819-0.032,44.572-8.183,59.842-19.124c7.659-5.514,14.016-11.734,18.799-18.568 c4.72-6.857,8.263-14.388,8.374-23.589H460.292z"></path> <path className="st0" d="M392.036,257.033c-11.394,2.121-21.778,8.613-28.928,18.345c-7.206,9.726-11.187,22.477-11.17,37.001 c0,7.778,1.119,16.097,3.463,24.876c4.044,15.136,10.988,27.49,20.236,36.309c9.192,8.811,20.944,13.952,33.139,13.92 c12.696,0.032,25.25-5.529,35.403-15.477c6.722-6.547,10.853-14.889,13.3-23.787c2.462-8.931,3.337-18.608,3.353-28.889 c-0.016-17.154-2.526-36.094-5.8-55.695c-3.29-19.585-7.381-39.805-10.734-59.08c-3.679-20.856-9.486-43.134-21.222-61.455 c-5.88-9.129-13.396-17.313-23.009-23.2c-9.582-5.895-21.198-9.272-34.117-9.24c-0.985,0-1.97,0.015-2.956,0.055 c-15.755,0.5-29.159,6.372-38.232,15.938c-9.121,9.526-13.824,21.841-15.588,34.521c-0.93,6.682,3.726,12.847,10.408,13.769 c6.674,0.93,12.839-3.726,13.761-10.4v-0.008c1.256-9.041,4.418-16.208,9.026-20.975c4.648-4.728,10.837-7.961,21.547-8.454 l2.034-0.039c8.851,0.032,15.533,2.113,21.373,5.657c8.692,5.276,15.771,14.595,21.245,26.79 c5.474,12.125,9.184,26.776,11.687,41.22c3.146,18.067,6.769,36.42,9.813,54.011c-8.256-4.442-17.495-6.777-26.894-6.769 C399.465,255.976,395.737,256.326,392.036,257.033z M436.115,313.109c0.024,0.191,0.088,0.366,0.12,0.557 c0.064,1.882,0.19,3.869,0.19,5.665c0.016,8.819-0.818,16.478-2.462,22.405c-1.653,5.975-3.996,10.043-6.802,12.776 c-6.531,6.285-12.744,8.541-18.385,8.564c-5.426-0.023-10.901-2.097-16.311-7.19c-5.355-5.085-10.392-13.316-13.483-24.924 c-1.852-6.944-2.638-13.157-2.638-18.584c0.015-10.17,2.701-17.504,6.379-22.492c3.726-4.974,8.43-7.818,13.857-8.875 c2.216-0.421,4.425-0.627,6.594-0.627c8.096,0.015,15.596,2.812,21.436,8.096C430.426,293.795,434.852,301.645,436.115,313.109z"></path> <path className="st0" d="M148.621,156.83c-3.385-5.825-10.853-7.802-16.677-4.402c-5.832,3.392-7.794,10.853-4.41,16.685 c2.686,4.616,5.212,9.296,7.468,14.071c25.202,53.216,22.08,112.631-3.234,161.27c-3.106,5.99-0.786,13.348,5.188,16.462 c5.991,3.107,13.348,0.795,16.463-5.188c28.682-55.076,32.233-122.601,3.638-183C154.437,167.19,151.576,161.906,148.621,156.83z"></path> <path className="st0" d="M96.096,183.358c-3.393-5.824-10.862-7.802-16.693-4.418c-5.824,3.401-7.794,10.87-4.418,16.693 c1.915,3.281,3.687,6.547,5.252,9.86c17.67,37.326,15.469,78.935-2.272,113.051c-3.114,5.975-0.786,13.348,5.188,16.462 c5.975,3.115,13.348,0.787,16.463-5.187c21.118-40.537,23.74-90.273,2.686-134.766C100.354,190.945,98.249,187.068,96.096,183.358z "></path> <path className="st0" d="M46.844,215.901c-1.32-2.781-2.718-5.236-4.005-7.469c-3.384-5.832-10.853-7.818-16.685-4.441 c-5.832,3.384-7.818,10.861-4.433,16.685v0.008c1.184,2.042,2.232,3.917,3.058,5.657c10.146,21.444,8.844,45.192-1.342,64.793 c-3.123,5.982-0.795,13.34,5.18,16.454c5.975,3.122,13.34,0.803,16.446-5.172l0.016-0.008 c11.854-22.724,14.682-50.007,6.134-75.645C49.99,223.107,48.528,219.477,46.844,215.901z"></path> </g> </g></svg>
                        Fonoaudiología
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/especialidades/psicologia" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' fill="#00b495" height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.425 460.425" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M240.754,266.877c7.564,2.732,60.222,21.753,66.185,23.907c4.943,1.784,10.207,0.756,14.07-2.246 c2.885-1.274,3.495-1.918,12.95-8.945c-8.418,1.88-6.434,1.436-14.696,3.281c-12.276,2.744-24.511-4.986-27.263-17.309 c-2.736-12.254,4.999-24.513,17.309-27.262l35.165-7.852l22.495-31.376l-15.892,41.361c-18.427,4.115-17.456,3.898-39.331,8.782 c-6.365,1.422-10.211,7.73-8.831,13.909c0.025,0.113,0.06,0.22,0.088,0.331c1.551,6.107,7.676,9.875,13.821,8.5l45.427-10.143 c3.808-0.85,6.937-3.549,8.337-7.192l17.548-45.674l-4.635,33.822l17.377-12.915c6.411-4.765,7.745-13.837,2.97-20.246 l-17.589-23.609c-4.868-6.534-14.184-7.758-20.575-2.696l-84.379,66.84c-19.872-7.178-12.981-4.689-35.896-12.966 c-3.455-1.248-7.253-1.163-10.647,0.241l-77.852,32.17c-7.532,3.112-11.114,11.74-8.002,19.271 c3.111,7.53,11.737,11.115,19.272,8.003L240.754,266.877z"></path> <path d="M389.582,171.12c9.439,8.399,23.852,9.389,34.469,1.499c12.12-9.008,14.643-26.135,5.635-38.255 s-26.135-14.643-38.255-5.635C377.542,139.051,376.597,159.564,389.582,171.12z"></path> <path d="M456.725,224.775c-5.802-7.217-16.353-8.364-23.574-2.563l-102.81,82.646H184.669c-9.261,0-16.768,7.507-16.768,16.768 c0,9.261,7.507,16.768,16.768,16.768h6.536v11.624c0,6.194,5.021,11.214,11.214,11.214c6.194,0,11.214-5.02,11.214-11.214 v-11.624h95.697v11.624c0,6.194,5.021,11.214,11.215,11.214c6.193,0,11.215-5.02,11.215-11.214v-11.624h4.485 c3.821,0,7.527-1.305,10.506-3.699l107.411-86.345C461.38,242.547,462.528,231.992,456.725,224.775z"></path> <circle cx="81.216" cy="125.269" r="26.075"></circle> <path d="M121.219,255.01c1.425-1.224,2.583-2.8,3.31-4.674c2.361-6.082-0.655-12.927-6.737-15.289l-38.094-14.79l-8.216-37.415 l13.844,26.927l11.938,4.635l4.619-28.395c1.562-9.602-4.956-18.652-14.558-20.214l-26.939-4.382 c-12.632-3.577-22.634,3.783-24.279,13.897c-1.478,9.467-12.398,80.248-12.861,86.346c-0.333,4.345,1.335,8.379,4.221,11.208 H11.214C5.021,272.865,0,277.885,0,284.079v65.938c0,6.194,5.021,11.214,11.214,11.214c6.194,0,11.214-5.02,11.214-11.214v-18.44 h44.414v18.44c0,6.194,5.021,11.214,11.214,11.214c6.194,0,11.214-5.02,11.214-11.214c0-71.735,0.2-66.876-0.466-69.126 l13.493,1.033l-10.084,62.884c-1.24,7.731,4.022,15.002,11.752,16.243c7.752,1.239,15.005-4.04,16.243-11.752l12.524-78.089 C133.914,263.84,129.061,256.406,121.219,255.01z M66.843,316.624H22.429v-21.33h44.414V316.624z M58.795,250.16l-2.44-0.947 c-6.368-2.473-10.179-8.702-9.914-15.167l1.964-46.135l9.575,43.601c0.849,3.864,3.575,7.047,7.263,8.479l34.203,13.28 L58.795,250.16z"></path> </g> </g> </g> </g></svg>
                        Psicología
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/especialidades/nutricion" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' fill="#00b495" height="65px" width="65px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_11_" d="M29.8,166.1c0.6-20-10.3-27.6-23.6-32.6C1.8,150.7,14,165,29.8,166.1"></path> <path id="XMLID_10_" d="M32.8,76.7c8.5-18.2,1.4-29.4-8.8-39.3C13.3,51.4,18.8,69.4,32.8,76.7"></path> <path id="XMLID_9_" d="M37.6,127.2c-0.6-20,10.3-27.6,23.6-32.6C65.6,111.8,53.4,126,37.6,127.2"></path> <path id="XMLID_8_" d="M37.6,158.1c-0.6-20,10.3-27.6,23.6-32.6C65.6,142.7,53.4,156.9,37.6,158.1"></path> <path id="XMLID_7_" d="M37.6,96.3c-0.6-20,10.3-27.6,23.6-32.6C65.6,80.9,53.4,95.2,37.6,96.3"></path> <path id="XMLID_6_" d="M29.8,135.3c0.6-20-10.3-27.6-23.6-32.6C1.8,119.8,14,134.1,29.8,135.3"></path> <path id="XMLID_5_" d="M29.8,104.4c0.6-20-10.3-27.6-23.6-32.6C1.8,89,14,103.2,29.8,104.4"></path> <path id="XMLID_16_" d="M179.9,255.4H72.5l53.7-93L179.9,255.4z"></path> <polygon id="XMLID_3_" points="14.2,192.1 241.7,130.2 238.3,117.7 10.8,179.6 "></polygon> <path id="XMLID_2_" d="M174.7,0.6c0,0,1.7,32.8,30.4,30C205.1,30.7,208.4,3.2,174.7,0.6"></path> <path id="XMLID_1_" d="M204.8,107.4c-3,4.3-8,7-13.6,7c-4.6,0-9.1-2.2-12.1-5.2c-6.2-6.8-14.2-21.9-14.2-21.9 c-4.5-9.1-6.9-16.2-6.9-23.4c0-15.2,12.3-28.4,27.6-28.4c7.5,0,14.3,3,19.3,7.9c5-4.9,11.8-7.9,19.3-7.9c15.3,0,27.6,13.2,27.6,28.4 c0,7.1-2.4,14.2-6.9,23.4c0,0-8,15.1-14.2,21.9c-3,3-7.5,5.2-12.1,5.2C212.8,114.4,207.8,111.6,204.8,107.4"></path> </g></svg>
                        Nutrición
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoEspecialidades