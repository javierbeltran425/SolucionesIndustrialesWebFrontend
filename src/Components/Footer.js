import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Logo from '../Resources/Images/logo.png'

const Footer = () => {
    return(
        <>
            <div className="md:grid md:grid-cols-3 w-full md:h-40 bg-gray-900">
                <div className="flex flex-row justify-center items-center">
                    <h3 className="text-white text-xl font-bold">S&M Industriales</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Logo} className="w-20" />
                    <p className="text-sm text-center text-white">
                        JARDINES DE GUADALUPE, CALLE LAS ROSAS #22 ANTIGUO CUSCATLAN LA LIBERTAD (EL SALVADOR)
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <a href="https://www.facebook.com/sym.industriales/"><Icon icon={faFacebookF} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/></a>
                        <a href="https://www.instagram.com/sym_industriales/?hl=es"><Icon icon={faInstagram} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/></a>
                        <a href="https://www.linkedin.com/in/sym-industriales-s-a-de-c-v-820193218/"><Icon icon={faLinkedin} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/></a>
                    </div>
                    <a href="https://javier-beltran.netlify.app/" className="text-xs text-white hover:text-red-800 duration-500">Desarrollado por Javier Beltrán</a>
                </div>
            </div>
        </>
    )
}

export default Footer