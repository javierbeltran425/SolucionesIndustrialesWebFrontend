import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AdminHeader = () => {
    const history = useHistory()

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/login')
    }

    function navigatePostProduct(e) {
        e.preventDefault()
        history.push('/admin-upload')
    }

    function navigateDeleteProduct(e) {
        e.preventDefault()
        history.push('/admin-delete')
    }

    return(
        <>
            <nav className="w-full h-auto bg-blue-500 z-10 text-white">
                <div className="flex flex-row justify-between w-full items-center">
                    <h1 className="px-2">S & M</h1>
                    <ul className="flex flex-row">
                        <li onClick={navigatePostProduct} className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Publicar producto</li>
                        <li onClick={navigateDeleteProduct} className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Eliminar producto</li>
                        <li onClick={closeSesionClick} className="px-2 py-2 hover:bg-white hover:text-black text-xl font-bold cursor-pointer">Cerrar sesión</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader