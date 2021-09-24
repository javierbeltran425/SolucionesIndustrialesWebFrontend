import Header from '../Components/Header'
import Footer from '../Components/Footer'

import contact from '../Resources/Presentacion/Contact.png'

const Contact = () => {
    return(
        <>
            <Header />
            <div className="flex items-center w-full min-h-screen bg-gray-800">
                <img src={contact} className="md:w-screen md:h-screen pt-16" />
            </div>
            <Footer />
        </>
    )
}

export default Contact