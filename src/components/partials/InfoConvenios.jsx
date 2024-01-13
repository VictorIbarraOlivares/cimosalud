import { Link } from 'react-router-dom'
function InfoConvenios () {
    return (
        <div className='info__especialidades'>
            <p className='info__especialidades__paragraph'>Nuestros convenios</p>

            <div className='content__especialidades'>
            <div className='card__especialidades'>
                    <Link to="/convenios/fonasa-ortodoncia" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon' width="65px" height="65px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.533 8.19283C13.4135 8.35138 11.3752 9.55942 9.45486 11.8803C7.74575 13.946 7.72475 17.1863 8.45959 20.8219C8.81881 22.5991 9.3398 24.385 9.85289 26.047C9.96736 26.4178 10.0822 26.7847 10.1949 27.1448C10.5799 28.3746 10.9401 29.5254 11.1763 30.4829C12.359 35.2753 13.4355 37.9765 15.7523 39.9172C15.8594 40.0069 15.9056 40.002 15.9315 39.9993L15.9344 39.999C16.0031 39.9921 16.1582 39.9468 16.4166 39.7582C16.9504 39.3689 17.5591 38.6505 18.2862 37.7331C18.3832 37.6108 18.4819 37.4854 18.5823 37.3579C19.1921 36.5834 19.8611 35.7335 20.5406 35.0567C21.2978 34.3025 22.2979 33.5197 23.4762 33.5161C24.6517 33.5126 25.644 34.3023 26.3879 35.0535C27.0571 35.7292 27.7164 36.5787 28.3174 37.3532C28.4169 37.4814 28.5148 37.6075 28.6109 37.7305C29.3286 38.6489 29.9297 39.3681 30.457 39.758C30.7124 39.9468 30.8639 39.9909 30.9281 39.9975C30.9291 39.9976 30.9303 39.9977 30.9314 39.9979C30.9527 40.0004 30.9956 40.0055 31.0993 39.9184C32.1293 39.0523 32.7927 38.3629 33.3528 37.4301C33.9257 36.4761 34.4217 35.2157 35.0275 33.1616C35.1838 32.6319 35.7398 32.3291 36.2696 32.4853C36.7993 32.6416 37.1021 33.1976 36.9458 33.7274C36.3268 35.8263 35.7739 37.2833 35.0675 38.4597C34.3484 39.6572 33.5022 40.511 32.3864 41.4492C31.9015 41.8569 31.3312 42.0494 30.7237 41.987C30.1604 41.9292 29.6688 41.6625 29.268 41.3662C28.4827 40.7856 27.7182 39.8363 27.035 38.9619C26.9305 38.8282 26.8272 38.6952 26.7248 38.5634C26.1173 37.7815 25.5436 37.0431 24.9669 36.4609C24.257 35.7441 23.7779 35.5152 23.4822 35.5161C23.1655 35.5171 22.6707 35.7578 21.952 36.4737C21.3656 37.0579 20.7825 37.7976 20.1661 38.5797C20.0629 38.7106 19.9588 38.8427 19.8536 38.9754C19.1611 39.8492 18.3876 40.7961 17.5952 41.3741C17.1906 41.6692 16.6967 41.9329 16.1327 41.9891C15.5254 42.0497 14.9546 41.8579 14.4681 41.4504C11.6136 39.0593 10.4223 35.775 9.23458 30.962C9.01446 30.07 8.68046 29.0027 8.30017 27.7873C8.1844 27.4173 8.06433 27.0336 7.94188 26.637C7.42488 24.9623 6.87916 23.0977 6.49924 21.2181C5.75581 17.5401 5.56689 13.442 7.91394 10.6054C10.0498 8.02402 12.5461 6.41068 15.3838 6.19841C18.0239 6.00092 20.7585 7.03147 23.5406 9.23855C23.7928 9.06675 24.1117 8.85911 24.4866 8.63427C25.4678 8.04585 26.8538 7.3271 28.4497 6.83104C31.6484 5.8368 35.8664 5.70688 39.1853 9.53774C40.9222 11.5425 41.7426 13.6227 41.9474 15.7273C42.1499 17.8093 41.7443 19.8565 41.1288 21.8017C40.9622 22.3283 40.4003 22.6201 39.8737 22.4535C39.3472 22.2868 39.0554 21.7249 39.222 21.1984C39.797 19.3812 40.1227 17.6262 39.9568 15.9209C39.7931 14.2382 39.1453 12.5458 37.6738 10.8474C35.0775 7.85069 31.8307 7.87452 29.0434 8.74091C27.6463 9.17517 26.409 9.81346 25.5152 10.3495C25.0704 10.6163 24.7157 10.8546 24.4747 11.0243C24.3544 11.1091 24.2627 11.1766 24.2026 11.2216C24.1726 11.2442 24.1505 11.261 24.1367 11.2717L24.1223 11.2829L24.1206 11.2842C24.1204 11.2843 24.1203 11.2844 24.1201 11.2845C24.1203 11.2844 24.1206 11.2842 23.5 10.5M15.533 8.19283C17.658 8.03388 20.0967 8.91218 22.8511 11.261L15.533 8.19283ZM22.8511 11.261C23.2143 11.5707 23.7457 11.5805 24.1201 11.2845L22.8511 11.261Z" fill="#00b495"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7261 9.86677C23.0758 9.43932 23.7058 9.37632 24.1333 9.72605L29.6333 14.226C30.0607 14.5758 30.1237 15.2058 29.774 15.6332C29.4243 16.0607 28.7942 16.1237 28.3668 15.774L22.8668 11.274C22.4393 10.9242 22.3763 10.2942 22.7261 9.86677Z" fill="#00b495"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M33 33C36.866 33 40 29.866 40 26C40 22.134 36.866 19 33 19C29.134 19 26 22.134 26 26C26 29.866 29.134 33 33 33ZM33 35C37.9706 35 42 30.9706 42 26C42 21.0294 37.9706 17 33 17C28.0294 17 24 21.0294 24 26C24 30.9706 28.0294 35 33 35Z" fill="#00b495"></path> <path d="M32 22C32 21.4477 32.4477 21 33 21C33.5523 21 34 21.4477 34 22V30C34 30.5523 33.5523 31 33 31C32.4477 31 32 30.5523 32 30V22Z" fill="#00b495"></path> <path d="M29 27C28.4477 27 28 26.5523 28 26C28 25.4477 28.4477 25 29 25L37 25C37.5523 25 38 25.4477 38 26C38 26.5523 37.5523 27 37 27L29 27Z" fill="#00b495"></path> </g></svg>
                        Fonasa - Ortodoncia
                    </Link>
                </div>

                <div className='card__especialidades'>
                    <Link to="/convenios/bomberos-chile" className="info__card__especialidades">
                        <svg className='info__card__especialidades__icon'  height="65px" width="65px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000" stroke="#c61010"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M466.535,268.5c-18.089,1.815-45.592,13.332-59.187,6.666c0,0-7.666-122.029-109.012-142.418v45.975H285.31 v-67.897c0-5.691-5.513-10.304-12.306-10.304H256h-17.004c-6.794,0-12.306,4.613-12.306,10.304v67.897h-13.026v-45.975 C112.32,153.137,104.652,275.166,104.652,275.166c-13.594,6.666-41.098-4.851-59.187-6.666 c-28.292-2.841-52.827,5.454-43.422,33.94c6.488,19.65,32.728,44.372,74.147,67.787c24.968,14.112,81.416,39.079,179.81,41.25 c98.394-2.171,154.842-27.138,179.81-41.25c41.42-23.416,67.659-48.137,74.146-67.787 C519.362,273.954,494.828,265.659,466.535,268.5z M210.568,250.453C244.984,240.811,256,216.029,256,216.029 s11.016,24.782,45.431,34.424v44.058c0,0-19.277,30.285-45.431,34.414c-26.154-4.129-45.432-34.414-45.432-34.414V250.453z M424.233,345.625c-5.97,2.518-56.448,36.179-168.232,39.944c-111.785-3.766-162.263-37.426-168.233-39.944 c-13.747-5.792-10.856-20.99,8.684-13.026c33.847,13.79,92.55,34.008,159.549,34.008c66.998,0,125.702-20.218,159.548-34.008 C435.088,324.635,437.981,339.832,424.233,345.625z"></path> </g> </g></svg>
                        Bomberos de Chile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoConvenios