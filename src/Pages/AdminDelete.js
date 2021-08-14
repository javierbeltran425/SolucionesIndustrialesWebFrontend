import axios from 'axios'
import { useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import Header from '../Components/AdminHeader'
import GeneralButton from '../Components/GeneralButton'

const AdminDelete = () => {
    var deleteProductCode = useRef(null)
    const isLogged = localStorage.getItem('token') != null
    const history = useHistory()

    if(!isLogged)
        history.push('/')

    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( !res.data.user.admin ) 
            history.push('/')
    })

    const { isLoadingDelete, mutate }  = useMutation(data => {
        axios.put(process.env.REACT_APP_API_URL + 'products/product-delete', data)
            .then(res => {
                console.log(res.data)

                console.log(data)

                if(res.status === 200){
                    alert("Producto borrado")
                }
            })
            .catch(({ response }) => {
                console.log(response)
                alert("Algo salió mal")
            })
    })

    function deleteProduct(e) {
        e.preventDefault()

        var data = {
            productID: deleteProductCode.current.value
        }

        mutate(data)
    }
    return(
        <>
            <div className="w-full h-full bg-gray-300 overflow-auto">
                <Header />
                <p className="p-10">
                    Bienvenido al sistema de eliminación de productos.<br/>
                    Para eliminar un producto, lo único que debe hacer es ingresar el código del 
                    producto a eliminar y presionar el botón "Eliminar producto".
                </p>

                <div className="flex flex-row w-full min-h-screen justify-center">
                    <form className="w-2/4 h-2/4 bg-white rounded-lg p-5">
                        <div className="flex flex-col">
                            <label className="mt-3 text-lg">Código del producto</label>
                            <input ref={deleteProductCode} type="text" className="my-3 border rounded shadow-md text-gray-600 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>

                        <div onClick={deleteProduct} className="flex justify-center w-full">
                            <GeneralButton text="Eliminar producto"/>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminDelete