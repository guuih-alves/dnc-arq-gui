import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectList/projectlist"
import Hero from "../components/Hero/hero"

function Home(){
    return(
    <>
        <Header />
        <div className="container">
        <Hero></Hero>
        <ProjectList></ProjectList>
        </div>
        <Footer />
    </>
    )
        
}

export default Home