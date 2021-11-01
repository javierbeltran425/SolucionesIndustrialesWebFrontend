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
                        <div className="md:flex md:flex-row w-full h-full md:justify-center items-center pt-20 overflow-x-auto items-end">
                            <BrandCard img={fafnir} title={"SOLUCIONES SEGURAS PARA UN FUTURO DIGNO DE SER VIVIDO"} 
                                text="En FAFNIR somos especialistas en el desarrollo y la fabricación de sensores y sistemas de control 
                                y medición de los niveles de llenado.
                                Proporcionamos la última tecnología en sistemas y soluciones de gestión de combustible que permiten a 
                                nuestros clientes de las industrias petrolera, química y farmacéutica confiar plenamente en nuestros 
                                productos.
                                Con nuestros sistemas medioambientales trabajamos para que todos tengamos un futuro digno de ser vivido." />

                            <BrandCard img={ebchq} title={"ELECTRICAS BC CORP"} 
                                text="Nuestra compañía, ELECTRICAS BC se estableció en Miami, Florida el 6 de Junio de 2001 como un 
                                distribuidor de materiales electricos y productos de automatización industrial, medidores, herramientas, 
                                neumatica e iluminación. Actualmente atendemos el mercado doméstico de USA, Centro y Sur America.
                                Desde nuestros comienzos hemos venido siguiendo un cuidadoso proceso de selección de nuestros 
                                proveedores que incluye exigentes ensayos de muestras e incluso auditoría de fábricas para asegurar la 
                                calidad de nuestros productos.
                                En la actualidad, la mayoría de nuestros productos cuentan con la certificación UL, y otras 
                                certificaciones internacionales como CE, KEMA. Ya que en la mayoría de los casos trabajamos directamente 
                                con los fabricantes, no existen intermediarios en nuestra cadena de abastecimiento, lo que nos permite 
                                ofrecer precios extremadamente competitivos.
                                Contamos con una bodega de 10,800 pies cuadrados estratégicamente ubicada cerca de los principales 
                                puertos, marítimo y aéreo del continente, y con stock permanente de más de 5.000 referencias diferentes 
                                lo que constituye un factor clave para ofrecer entrega inmediata y la conveniencia de unos menores 
                                tiempos de tránsito para despachos internacionales.
                                Estamos totalmente comprometidos con la satisfacción de nuestros clientes, trabajando día a día para 
                                extender nuestra lineas de producto existentes, y complementarlas con otras nuevas para poder ofrecer 
                                una solución completa y confiable en un solo lugar. Nuestra política de garantía es la mejor prueba de 
                                nuestro compromiso de hacer las cosas cada día mejor." />

                            <BrandCard img={anderson} title={"LÍDER DE TECNOLOGÍA GLOBAL EN INSTRUMENTACIÓN HIGIÉNICA"} 
                                text="Anderson-Negele es una empresa internacional que se especializa en el desarrollo y la producción 
                                de sensores y equipos de medición para aplicaciones higiénicas. Como un socio confiable y flexible, 
                                nuestro objetivo es siempre ofrecerle la mejor solución para su proceso.La marca Negele ha sido 
                                sinónimo de productos innovadores de alta calidad durante más de 35 años. Como empresa pionera en la 
                                producción de equipos de medición para aplicaciones higiénicas, desde un principio nos hemos enfocado 
                                en las necesidades especiales de las industrias farmacéutica, alimentaria y de bebidas.A través de 
                                nuestros procesos de innovación, nos esforzamos por ofrecer a nuestros clientes la ventaja económica y 
                                tecnológica que necesitan para alcanzar el éxito. Para ello analizamos sus necesidades particulares y 
                                desarrollamos soluciones que se adaptan específicamente a su proceso de producción.Como parte del grupo 
                                empresarial Fortive, un líder de tecnología global de “Fortune 500“, Anderson-Negele emplea el exitoso 
                                Sistema de Negocio Fortive (FBS). El FBS nos ayuda a garantizar la alta calidad de nuestros productos 
                                en los procesos de desarrollo y producción y a mejorar nuestros procesos y métodos en forma continua." />

                            <BrandCard img={limerpak} title={"LA MARCA DE FECHADORES DE TINTA MÁS INNOVADORA DE BRASIL"} 
                                text="Empresa fabricante de fechadores de inyección de tinta TIJ fundada en 2001, Limerpak se compromete 
                                a ofrecer al mercado nacional equipos innovadores para empresas de todos los tamaños.
                                Actualmente Limerpak reúne a un personal muy centrado en los retos que presentan los clientes y, 
                                sin duda, es por este factor que Limerpak ocupa una posición destacada en el mercado.
                                La dirección de Limerpak entiende que la inversión constante en Investigación y Desarrollo es esencial 
                                para mantener el flujo de innovación, atrayendo y reteniendo los mejores talentos en Ingeniería de 
                                Producto, Procesos y Automatización Industrial." />

                            <BrandCard img={makita} title={"SOBRE MAKITA"} 
                                text="Todo empezó hace más de 100 años con un motor. La Corporación Makita se fundó en 1915 como una 
                                compañía de venta y reparación de motores eléctricos. Hoy en día, es una marca global en más de 40 
                                países, Makita es líder en innovación en la manufactura de los mejores productos en su clase a lo largo 
                                de 10 plantas que operan en 8 países. La calidad y durabilidad sin igual de los productos Makita está 
                                dirigida por una fuerte capacidad de investigación y desarrollo que se ha ganado la confianza del 
                                usuario profesional a nivel mundial. Cada día, en sitios laborales alrededor del mundo, Makita ofrece 
                                potencia, rendimiento y durabilidad que el usuario exige con productos que son más compactos, con menos 
                                vibración y que se sienten mejor. " />

                            <BrandCard img={truper} title={"SOBRE TRUPER"} 
                                text="Somos la empresa más reconocida en Latinoamérica en manufactura, distribución y comercialización 
                                de herramientas y productos para todos los segmentos de la industria ferretera.
                                Nuestro catálogo está en constante crecimiento, incluye más de 11,000 productos. El buen desempeño de 
                                estos está garantizado por el Centro de Calidad Avanzada Truper CCAT, el laboratorio de calidad más 
                                avanzado del mundo en el sector ferretero." />
                        </div>
                    </div>
                    <div className="md:absolute md:right-0 flex flex-row md:flex-col items-center md:w-1/4 h-5/6  overflow-y-auto">
                        <div onClick={()=> SetCategory('Herramientas')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Automatización')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">AUTOMATIZACIÓN</h3>
                        </div>

                        <div onClick={()=> SetCategory('Instrumentación')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">INSTRUMENTACIÓN</h3>
                        </div>

                        <div onClick={()=> SetCategory('Control y armado')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">CONTROL Y ARMADO</h3>
                        </div>

                        <div onClick={()=> SetCategory('Residencial')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">RESIDENCIAL</h3>
                        </div>

                        <div onClick={()=> SetCategory('Bono clientes')} className="flex justify-center items-center bg-blue-700 rounded-full w-56 h-20 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-md font-bold pl-3">BONO CLIENTES</h3>
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