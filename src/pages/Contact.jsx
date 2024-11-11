import { useContext } from 'react'
import ContactForm from "../components/ContactForm/contactform"
import Banner from "../components/Banner/banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


//CONTEXT
import { AppContext } from '../context/AppContest'

function Contact(){

    const appContext = useContext(AppContext)
    return(
        <>
         <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg"></Banner>
        <div className="container">
        <ContactForm></ContactForm>
        </div>
        <Footer />
    </>
    )
        
}

export default Contact