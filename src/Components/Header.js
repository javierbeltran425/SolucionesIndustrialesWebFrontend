import { useHistory } from 'react-router-dom'

import Logo from '../Resources/Images/logo.png'

const Header = () => {
    const history = useHistory()

    function homeOnclick(e) {
        e.preventDefault()
        history.push('/')
    }

    function aboutUsOnClick(e) {
        e.preventDefault()
        history.push('/about')
    }

    return(
        <>
            <nav className="absolute w-full h-auto bg-transparent z-10 text-white">
                <div className="flex flex-row justify-between w-full">
                    <img onClick={homeOnclick} src={Logo} className="w-12 h-12 ml-5 mt-2 cursor-pointer" alt="logo"/>
                    <ul className="flex flex-row items-center">
                        <li onClick={homeOnclick} className="px-4 py-4 hover:bg-white duration-500 hover:text-blue-700 text-xl font-bold cursor-pointer">Inicio</li>
                        <li onClick={aboutUsOnClick} className="px-4 py-4 hover:bg-white duration-500 hover:text-blue-700 text-xl font-bold cursor-pointer">Quienes somos</li>
                        <li className="px-4 py-4 hover:bg-white duration-500 hover:text-blue-700 text-xl font-bold cursor-pointer">Contacto</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header