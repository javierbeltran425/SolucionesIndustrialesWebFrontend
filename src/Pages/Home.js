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
import img08 from '../Resources/Presentacion/08.png'
import img09 from '../Resources/Presentacion/09.png'

/**
 * Images for brandcard
 */
import fafnir from '../Resources/Images/fafnir.png'
import ebchq from '../Resources/Images/EBCHQ.jpg'
import anderson from '../Resources/Images/anderson.png'
import limerpak from '../Resources/Images/LIMERPAK.png'
import makita from '../Resources/Images/makita.png'
import truper from '../Resources/Images/truper.png'

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
            <BackDiv className="w-full h-screen">
            <Header />
            <div className="absolute w-full h-screen bg-black opacity-80" />
                <div className="z-10" >
                <div className="flex flex-col md:flex-row w-full h-screen pt-16 overflow-y-auto">
                    <div className="flex flex-col h-5/6 md:w-3/4 items-center z-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 pl-4 items-center">
                            <img src={Logo} className="w-52 h-52"/>
                            <img src={LogoText} className="w-3/4 h-20 md:h-32 md:w-3/5"/>
                        </div>
                        <div className="md:flex md:flex-row w-full pb-3 overflow-x-auto">
                            <BrandCard 
                                img={fafnir} 
                                title="SOLUCIONES SEGURAS PARA UN FUTURO QUE VALGA LA PENA VIVIR"
                                text="FAFNIR somos especialistas en el desarrollo y fabricación de sensores y sistemas para monitorizar y medir niveles de llenado.
                                Proporcionamos la última tecnología en sistemas y soluciones de gestión de combustibles que permiten a nuestros clientes de las industrias petrolera, química y farmacéutica confiar plenamente en nuestros productos.
                                
                                Con nuestros sistemas medioambientales, todos trabajamos para garantizar que todos tengamos un futuro que valga la pena vivir."
                                />
                            <BrandCard 
                                img={ebchq}
                                title=""
                                text=""
                            />
                            <BrandCard 
                                img={anderson}
                                title="ANDERSON-NEGELE SENSORES DE PROCESOS HIGIÉNICOS PARA APLICACIONES ALIMENTARIAS Y FARMACÉUTICAS"
                                text="ANDERSON-NEGELE desarrolla y produce sensores en línea para aplicaciones higiénicas: temperatura, presión, nivel, nivel límite, turbidez, conductividad y refractómetro. Estos apoyan la supervisión y optimización de los procesos de producción y CIP/SIP en la industria alimentaria y farmacéutica, por ejemplo, en las lecherías, cervecerías, la producción de bebidas, vino, zumos, refrescos, agua mineral y otros alimentos"
                            />
                            <BrandCard 
                                img={limerpak}
                                title="La marca  Inkjet Dater  más innovadora de Brasil. Así es como  Limerpak  es reconocido hoy incluso por sus competidores."
                                text="Fabricante de TIJ Inkjet Daters fundado en 2001, Limerpak se compromete a proporcionar al mercado nacional equipos innovadores para empresas de todos los tamaños."
                            />
                            <BrandCard 
                                img={makita}
                                title=""
                                text=""
                            />
                            <BrandCard 
                                img={truper}
                                title="Herramientas con la mejor relación calidad-precio."
                                text="Somos la empresa más reconocida en Latinoamérica en manufactura, distribución y comercialización de herramientas y productos para todos los segmentos de la industria ferretera."
                            />
                        </div>
                    </div>
                    <div className="md:absolute md:right-0 flex flex-row md:flex-col items-center md:w-1/4 h-5/6  overflow-y-auto">
                        <div onClick={()=> SetCategory('Herramientas')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Máquinas estacionarias')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faCogs} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">MÁQUINAS ESTACIONARIAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Máquinas portátiles')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faCogs} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">MÁQUINAS PORTÁTILES</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <Icon icon={faWrench} className="text-3xl text-white"/>
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>
                    </div>
                </div>
                </div>
                </BackDiv>

                <div className="flex items-center w-full bg-gray-800">
                    <Carousel className="w-full">
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
                        <div>
                            <img src={img08} />
                        </div>
                        <div>
                            <img src={img09} />
                        </div>
                    </Carousel>
                </div>
                
                <Footer />
        </>
    )
}

export default Home