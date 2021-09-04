import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { Carousel } from 'react-responsive-carousel';

import About01 from '../Resources/Presentacion/about01.png'
import About02 from '../Resources/Presentacion/about02.png'

const AboutUs = () => {
    return(
        <>
            <Header />
            <div className="flex items-center w-full min-h-screen bg-gray-800">
                <Carousel className="pt-16">
                        <div>
                            <img src={About01} />
                        </div>
                        <div>
                            <img src={About02} />
                        </div>
                </Carousel>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs