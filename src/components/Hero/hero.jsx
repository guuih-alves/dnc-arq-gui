import {Link} from 'react-router-dom'
import { useContext } from 'react'
import './hero.css'
import Button from '../button/button'

//CONTEXT
import { AppContext } from '../../context/AppContest'

function Hero(){
    const appContext = useContext(AppContext)
    return(
        <div className="hero d-flex al-center">
            <div className="hero-text">
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}.</p>
                <Link to="/about">
                <Button buttonStyle="secondary" arrow>
                   {appContext.languages[appContext.language].hero.cta}
                </Button>
                </Link>
                
            </div>
            
    </div>
    )
        
}

export default Hero