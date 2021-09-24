import { useHistory } from 'react-router-dom'

import Logo from '../Resources/Images/logo.png'

const Header = () => {
    const history = useHistory()

    return(
        <>
            <nav className="absolute w-full h-auto bg-transparent z-10 text-white">
                <div className="flex flex-row md:justify-between w-full">
                    <img onClick={e => {
                        e.preventDefault()
                        history.push('/')
                    }} src={Logo} className="w-10 h-10 md:w-12 md:h-12 ml-5 mt-2 cursor-pointer" alt="logo"/>
                    <ul className="flex flex-row items-center">
                        <li onClick={e => {
                            e.preventDefault()
                            history.push('/')
                        }} className="text-xl px-2 py-2 md:px-4 md:py-4 hover:bg-white duration-500 hover:text-blue-700 lg:text-xl font-bold cursor-pointer">Inicio</li>
                        <li onClick={e => {
                            e.preventDefault()
                            history.push('/about')
                        }} className="text-xl px-2 py-2 md:px-4 md:py-4 hover:bg-white duration-500 hover:text-blue-700 lg:text-xl font-bold cursor-pointer">Quienes somos</li>
                        <li onClick={e => {
                            e.preventDefault()
                            history.push('/contact')
                        }} className="text-xl px-2 py-2 md:px-4 md:py-4 hover:bg-white duration-500 hover:text-blue-700 lg:text-xl font-bold cursor-pointer">Contacto</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header