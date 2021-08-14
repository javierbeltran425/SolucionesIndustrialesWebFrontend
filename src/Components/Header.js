const Header = () => {
    return(
        <>
            <nav className="w-full h-auto bg-blue-500 z-10 text-white">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="px-2">S & M</h1>
                    <ul className="flex flex-row">
                        <li className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Inicio</li>
                        <li className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Quienes somos</li>
                        <li className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Contacto</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header