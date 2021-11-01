import axios from 'axios'

import { useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

import Header from '../Components/AdminHeader'
import GeneralButton from '../Components/GeneralButton'

const AdminUpload = () => {
    var productName = useRef(null), productCode = useRef(null), productUrl = useRef(null)
    var  productMaker = useRef(null), productCategory = useRef(null)
    const history = useHistory()

    const isLogged = localStorage.getItem('token') != null

    if(!isLogged)
        history.push('/')

    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( !res.data.user.admin ) 
            history.push('/')
    })

    const CategOptions = [
        { value: "Herramientas", label: "Herramientas"},
        { value: "Automatización", label: "Automatización"},
        { value: "Instrumentación", label: "Instrumentación"},
        { value: "Control y armado", label: "Control y armado"},
        { value: "Residencial", label: "Residencial"},
        { value: "Bono clientes", label: "Bono clientes"},
    ]

    const MakerOptions = [
        { value: "Fafnir", label: "Fafnir"},
        { value: "Ebchq", label: "Ebchq"},
        { value: "Anderson", label: "Anderson"},
        { value: "Limerpak", label: "Limerpak"},
        { value: "Makita", label: "Makita"},
        { value: "Truper", label: "Truper"},
    ]

    const { isLoading, mutate }  = useMutation(register => {
        axios.post(process.env.REACT_APP_API_URL + 'products/product-register', register)
            .then(res => {
                console.log(res.data)

                if(res.status === 201)
                    alert("Producto registrado")
            })
            .catch(({ response }) => {
                alert("Algo salió mal")
            })
    })

    function uploadOnclick(e){
        e.preventDefault()
        
        var data

        if(productCode.current.value == "" || productName.current.value == "" || productUrl.current.value == "" || productMaker == "[object Object]" || productCategory == "[object Object]")
        {
            alert("No se deben dejar campos vacíos")
        }
        else
        {
            data = {
                productID: productCode.current.value,
                name: productName.current.value,
                maker: productMaker,
                category: productCategory,
                url: productUrl.current.value
            }

            mutate(data)
        }
    }

    const makerChange = selectedOption => {
        productMaker = selectedOption.value
    }

    const categoryChange = selectedOption => {
        productCategory = selectedOption.value
    }
    

    return(
        <>
            <div className="w-full h-full bg-gray-300 overflow-auto">
                <Header />
                <p className="py-5 px-10">
                    Bienvenido al sistema de publicación de productos. <br />
                    Para ingresar un nuevo producto al sistema solo siga las siguientes instrucciones: <br />
                    <ul className="list-disc ml-5">
                        <li>Ingresar nombre del producto</li>
                        <li>Ingresar código del producto</li>
                        <li>Ingresar la url del producto</li>
                        <li>Click en el botón publicar</li>
                    </ul>
                </p>
                <div className="w-full flex flex-col items-center">

                    <form className="w-1/2 min-h-1/2 bg-white flex flex-col items-center rounded-lg shadow-lg mb-20">
                            <div className="flex flex-col">
                                <label className="mt-3 text-lg">Nombre del producto</label>
                                <input ref={productName} type="text" className="my-3 border rounded shadow-md text-gray-600 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-col">
                                <label className="mt-3 text-lg">Código del producto</label>
                                <input ref={productCode} type="text" className="my-3 border rounded shadow-md text-gray-600 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-col">
                                <label className="mt-3 text-lg">Url del producto</label>
                                <input ref={productUrl} type="text" className="my-3 border rounded shadow-md text-gray-600 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-col w-full justify-center items-center px-5">
                                <label className="mt-3 text-lg">Marca de producto</label>
                                <Select className="w-full shadow-md" isSearchable={true} options={MakerOptions} onChange={makerChange}/>
                            </div>

                            <div className="flex flex-col w-full justify-center items-center px-5">
                                <label className="mt-3 text-lg">Categoria de producto</label>
                                <Select className="w-full shadow-md" isSearchable={true} options={CategOptions} onChange={categoryChange}/>
                            </div>

                            <div onClick={uploadOnclick} className="flex justify-center w-full">
                                <GeneralButton text="Publicar"/>
                            </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminUpload