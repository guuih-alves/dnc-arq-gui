import { useContext } from 'react'
import AboutText from "../components/AboutText/aboutText"
import Banner from "../components/Banner/banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

//CONTEXT
import { AppContext } from '../context/AppContest'


function About(){

    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="house.png"></Banner>
        <div className="container">
            <AboutText></AboutText>
        </div>
        <Footer />
    </>
    )
        
}

export default About