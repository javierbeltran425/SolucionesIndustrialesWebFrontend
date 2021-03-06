import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
            <div className="absolute w-full h-screen bg-black opacity-80 pb-10" />
                <div className="z-10" >
                <div className="flex flex-col md:flex-row w-full h-screen pt-16 overflow-y-auto">
                    <div className="flex flex-col h-5/7 md:w-3/4 items-center z-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 pl-4 items-center">
                            <img src={Logo} className="w-52 h-52"/>
                            <img src={LogoText} className="w-3/4 h-20 md:h-32 md:w-3/5"/>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap md:flex-row w-full h-full justify-center items-center md:p-6 mt-8 md:mt-20 overflow-x-auto ">
                            <BrandCard img={fafnir} title={"SOLUCIONES SEGURAS PARA UN FUTURO DIGNO DE SER VIVIDO"} 
                                text="En FAFNIR somos especialistas en el desarrollo y la fabricaci??n de sensores y sistemas de control 
                                y medici??n de los niveles de llenado.
                                Proporcionamos la ??ltima tecnolog??a en sistemas y soluciones de gesti??n de combustible que permiten a 
                                nuestros clientes de las industrias petrolera, qu??mica y farmac??utica confiar plenamente en nuestros 
                                productos.
                                Con nuestros sistemas medioambientales trabajamos para que todos tengamos un futuro digno de ser vivido." />

                            <BrandCard img={ebchq} title={"ELECTRICAS BC CORP"} 
                                text="Nuestra compa????a, ELECTRICAS BC se estableci?? en Miami, Florida el 6 de Junio de 2001 como un 
                                distribuidor de materiales electricos y productos de automatizaci??n industrial, medidores, herramientas, 
                                neumatica e iluminaci??n. Actualmente atendemos el mercado dom??stico de USA, Centro y Sur America.
                                Desde nuestros comienzos hemos venido siguiendo un cuidadoso proceso de selecci??n de nuestros 
                                proveedores que incluye exigentes ensayos de muestras e incluso auditor??a de f??bricas para asegurar la 
                                calidad de nuestros productos.
                                En la actualidad, la mayor??a de nuestros productos cuentan con la certificaci??n UL, y otras 
                                certificaciones internacionales como CE, KEMA. Ya que en la mayor??a de los casos trabajamos directamente 
                                con los fabricantes, no existen intermediarios en nuestra cadena de abastecimiento, lo que nos permite 
                                ofrecer precios extremadamente competitivos.
                                Contamos con una bodega de 10,800 pies cuadrados estrat??gicamente ubicada cerca de los principales 
                                puertos, mar??timo y a??reo del continente, y con stock permanente de m??s de 5.000 referencias diferentes 
                                lo que constituye un factor clave para ofrecer entrega inmediata y la conveniencia de unos menores 
                                tiempos de tr??nsito para despachos internacionales.
                                Estamos totalmente comprometidos con la satisfacci??n de nuestros clientes, trabajando d??a a d??a para 
                                extender nuestra lineas de producto existentes, y complementarlas con otras nuevas para poder ofrecer 
                                una soluci??n completa y confiable en un solo lugar. Nuestra pol??tica de garant??a es la mejor prueba de 
                                nuestro compromiso de hacer las cosas cada d??a mejor." />

                            <BrandCard img={anderson} title={"L??DER DE TECNOLOG??A GLOBAL EN INSTRUMENTACI??N HIGI??NICA"} 
                                text="Anderson-Negele es una empresa internacional que se especializa en el desarrollo y la producci??n 
                                de sensores y equipos de medici??n para aplicaciones higi??nicas. Como un socio confiable y flexible, 
                                nuestro objetivo es siempre ofrecerle la mejor soluci??n para su proceso.La marca Negele ha sido 
                                sin??nimo de productos innovadores de alta calidad durante m??s de 35 a??os. Como empresa pionera en la 
                                producci??n de equipos de medici??n para aplicaciones higi??nicas, desde un principio nos hemos enfocado 
                                en las necesidades especiales de las industrias farmac??utica, alimentaria y de bebidas.A trav??s de 
                                nuestros procesos de innovaci??n, nos esforzamos por ofrecer a nuestros clientes la ventaja econ??mica y 
                                tecnol??gica que necesitan para alcanzar el ??xito. Para ello analizamos sus necesidades particulares y 
                                desarrollamos soluciones que se adaptan espec??ficamente a su proceso de producci??n.Como parte del grupo 
                                empresarial Fortive, un l??der de tecnolog??a global de ???Fortune 500???, Anderson-Negele emplea el exitoso 
                                Sistema de Negocio Fortive (FBS). El FBS nos ayuda a garantizar la alta calidad de nuestros productos 
                                en los procesos de desarrollo y producci??n y a mejorar nuestros procesos y m??todos en forma continua." />

                            <BrandCard img={limerpak} title={"LA MARCA DE FECHADORES DE TINTA M??S INNOVADORA DE BRASIL"} 
                                text="Empresa fabricante de fechadores de inyecci??n de tinta TIJ fundada en 2001, Limerpak se compromete 
                                a ofrecer al mercado nacional equipos innovadores para empresas de todos los tama??os.
                                Actualmente Limerpak re??ne a un personal muy centrado en los retos que presentan los clientes y, 
                                sin duda, es por este factor que Limerpak ocupa una posici??n destacada en el mercado.
                                La direcci??n de Limerpak entiende que la inversi??n constante en Investigaci??n y Desarrollo es esencial 
                                para mantener el flujo de innovaci??n, atrayendo y reteniendo los mejores talentos en Ingenier??a de 
                                Producto, Procesos y Automatizaci??n Industrial." />

                            <BrandCard img={makita} title={"SOBRE MAKITA"} 
                                text="Todo empez?? hace m??s de 100 a??os con un motor. La Corporaci??n Makita se fund?? en 1915 como una 
                                compa????a de venta y reparaci??n de motores el??ctricos. Hoy en d??a, es una marca global en m??s de 40 
                                pa??ses, Makita es l??der en innovaci??n en la manufactura de los mejores productos en su clase a lo largo 
                                de 10 plantas que operan en 8 pa??ses. La calidad y durabilidad sin igual de los productos Makita est?? 
                                dirigida por una fuerte capacidad de investigaci??n y desarrollo que se ha ganado la confianza del 
                                usuario profesional a nivel mundial. Cada d??a, en sitios laborales alrededor del mundo, Makita ofrece 
                                potencia, rendimiento y durabilidad que el usuario exige con productos que son m??s compactos, con menos 
                                vibraci??n y que se sienten mejor. " />

                            <BrandCard img={truper} title={"SOBRE TRUPER"} 
                                text="Somos la empresa m??s reconocida en Latinoam??rica en manufactura, distribuci??n y comercializaci??n 
                                de herramientas y productos para todos los segmentos de la industria ferretera.
                                Nuestro cat??logo est?? en constante crecimiento, incluye m??s de 11,000 productos. El buen desempe??o de 
                                estos est?? garantizado por el Centro de Calidad Avanzada Truper CCAT, el laboratorio de calidad m??s 
                                avanzado del mundo en el sector ferretero." />
                        </div>
                    </div>
                    <div className="md:absolute md:right-0 flex flex-row md:flex-col items-center justify-center md:w-1/4 h-5/6 md:overflow-y-auto overflow-x-auto">
                        <div onClick={()=> SetCategory('Herramientas')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 ml-32 md:ml-0 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">HERRAMIENTAS</h3>
                        </div>

                        <div onClick={()=> SetCategory('Automatizaci??n')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">AUTOMATIZACI??N</h3>
                        </div>

                        <div onClick={()=> SetCategory('Instrumentaci??n')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">INSTRUMENTACI??N</h3>
                        </div>

                        <div onClick={()=> SetCategory('Control y armado')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">CONTROL Y ARMADO</h3>
                        </div>

                        <div onClick={()=> SetCategory('Residencial')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">RESIDENCIAL</h3>
                        </div>

                        <div onClick={()=> SetCategory('Bono clientes')} className="flex justify-center items-center bg-blue-700 rounded-full w-48 h-10 mt-5 mx-2 md:mx-0 cursor-pointer px-2 transform hover:scale-105 duration-500">
                            <h3 className="text-white text-xs md:text-sm font-bold pl-3">BONO CLIENTES</h3>
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