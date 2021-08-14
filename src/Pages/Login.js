import axios from 'axios'

import { useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const email = useRef(null), password = useRef(null)
    const history = useHistory()

    const { isLoading, mutate } = useMutation(login => {
        axios.post(process.env.REACT_APP_API_URL + 'users/login', login)
            .then(res => {
                console.log(res.data)

                if(res.status === 200)
                    saveAndNavigate(res.data.token)
            })
            .catch(({ response }) => {
                if(response.status === 404)
                    alert("Usuario no encontrado")
                else if(response.status === 401)
                    alert("Constraseña incorrecta")
                else
                    alert(response.data.message || "Algo salió mal")
            })
    })
    

    function hancdleClick(e) {
        e.preventDefault()

        var loginData = { email: email.current.value, password: password.current.value }

        if( loginData.email === "" || loginData.password === "" )
            alert("Introduce tus datos primero.")
        else
            mutate(loginData)
    }

    function saveAndNavigate(token) {
        localStorage.setItem('token', token)
        history.push('/admin-upload')
    }


    return(
        <>
            <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-1/2 bg-white h-3/4 rounded-lg shadow-lg">
                    <div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg">Email</label>
                        <input ref={email} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                    </div>
                    <div className="mt-5 flex flex-col justify-center items-center">
                        <label className="mt-3 text-lg">Password</label>
                        <input ref={password} type="password" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                    </div>

                    <button onClick={hancdleClick} className="shadow-md w-5/12 p-1 my-4 bg-blue-400 hover:bg-blue-600 font-bold text-white rounded">
                        Iniciar sesión
                    </button>

                    <p className="text-blue-600">
                        Favor iniciar sesión con su correo eletrónico.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login