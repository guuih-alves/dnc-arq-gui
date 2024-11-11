import { useContext } from 'react'
import Banner from "../components/Banner/banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectList/projectlist"


//CONTEXT
import { AppContext } from '../context/AppContest'

function Projects(){

    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image="project.jpg"></Banner>
        <div className="container">
        <ProjectList></ProjectList>
        </div>
        <Footer />
    </>
    )
        
}

export default Projects