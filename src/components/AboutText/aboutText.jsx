import './aboutText.css'
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../../context/AppContest'

function AboutText(props){
    const appContext = useContext(AppContext)
    return(
        
            <div className="container">

                <div className="text-section d-flex">
                <div className="text-section-text ">
                    <h2>{appContext.languages[appContext.language].about.title}
Services.</h2>
                </div>

                <div className="text-section-text">
                    <p className="primary-color">{appContext.languages[appContext.language].about.p1}</p>
                    <p className="">{appContext.languages[appContext.language].about.p2}</p>
                    <p className="">{appContext.languages[appContext.language].about.p3}</p>
                </div>

                </div>
                
            </div>

    )
        
}

export default AboutText