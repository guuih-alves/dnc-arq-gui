import { useContext } from 'react'
import { Link } from 'react-router-dom'

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import brasilIcon from '../../assets/brazillogo.svg'
import UsaIcon from '../../assets/usalogo.svg'
import FacebookIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'

//COMPONENT
import Button from '../button/button'

//CONTEXT
import { AppContext } from '../../context/AppContest'

function Footer(){
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {         /* No componente onde desejamos implementar a troca de idioma  */
        appContext.setLanguage(country);
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                  
                    <div className="d-flex social-links">
                        <a href="https://google.com" target="_blank">
                            <img src={FacebookIcon}></img>
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={TwitterIcon}></img>
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={LinkedinIcon}></img>
                        </a>
                        <a href="https://google.com" target="_blank">
                            <img src={InstagramIcon}></img>
                        </a>
                    </div>
                </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                 <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                 <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                 <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                 <li><Link to="/projects">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.b</p>
                            <p className="grey-1-color">(19) 99187-4342</p> 
                            
                        </div>
                    </div>
                </div>
                
                <div className="d-flex jc-space-between footer-copy">
                        <p className="grey-1-color">Copyright DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                                 <img src={brasilIcon} height="29px"></img>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                                 <img src={UsaIcon} height="29px"></img>
                        </Button>
       
                    </div>                   
                </div>
            </div>
        </footer>
    )
}

export default Footer