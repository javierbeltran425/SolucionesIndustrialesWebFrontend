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
                <div className="flex flex-row justify-center items-center">
                    <Icon icon={faFacebookF} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/>
                    <Icon icon={faInstagram} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/>
                    <Icon icon={faLinkedin} className="text-white m-5 text-2xl hover:text-red-800 duration-500"/>
                </div>
            </div>
        </>
    )
}

export default Footer