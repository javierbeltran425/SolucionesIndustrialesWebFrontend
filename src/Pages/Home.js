import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

/**
 * Components
 */
import Background from '../Resources/Images/background.jpg'
import Header from '../Components/Header'
import BrandCard from '../Components/BrandCard'
import Footer from '../Components/Footer'

/**
 * Logo images
 */
import Logo from '../Resources/Images/logo.png'
import LogoText from '../Resources/Images/LogoText.png'

/**
 * Images for carrousel
 */
import img01 from '../Resources/Presentacion/01.png'
import img02 from '../Resources/Presentacion/02.png'
import img03 from '../Resources/Presentacion/03.png'
import img04 from '../Resources/Presentacion/04.png'
import img05 from '../Resources/Presentacion/05.png'
import img06 from '../Resources/Presentacion/06.png'
import img07 from '../Resources/Presentacion/07.png'

const BackDiv = styled.div`
    background: url(${Background});
    background-size: cover
`

const CaButton = styled.div`
    transition: max-width 0.6s ease-in-out;
    max-width: ${( { useWidth } ) => useWidth };
`

const Home = () => {
    const history = useHistory()

    function SetCategory(category){
        localStorage.setItem('category', category)
        history.push('/products')
    }

    return(
        <>
        <Header />
            <BackDiv className="w-full h-screen">
                <div className="flex flex-row w-full h-screen pt-16">
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-row w-full mt-16 pl-20 items-center">
                            <img src={Logo} />
                            <img src={LogoText} className="h-32"/>
                        </div>
                        <div className="flex flex-row w-full pb-3 pt-16 pl-4">
                            <BrandCard />
                            <BrandCard />
                            <BrandCard />
                            <BrandCard />
                        </div>
                    </div>
                    <div className="absolute right-0 flex flex-col items-center w-1/4 h-5/6  overflow-y-auto">
                        <div onClick={()=> SetCategory('Herramientas')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Máquinas estacionarias')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faCogs} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">MÁQUINAS ESTACIONARIAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Máquinas portátiles')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faCogs} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">MÁQUINAS PORTÁTILES</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>
                    </div>
                </div>
                </BackDiv>

                <div className="flex flex-row w-full h-full bg-gray-300">
                    <Carousel >
                        <div>
                            <img src={img01} />
                        </div>
                        <div>
                            <img src={img02} />
                        </div>
                        <div>
                            <img src={img03} />
                        </div>
                        <div>
                            <img src={img04} />
                        </div>
                        <div>
                            <img src={img05} />
                        </div>
                        <div>
                            <img src={img06} />
                        </div>
                        <div>
                            <img src={img07} />
                        </div>
                    </Carousel>
                </div>
                
                <Footer />
        </>
    )
}

export default Home