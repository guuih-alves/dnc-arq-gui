import { useState, useEffect, useContext } from 'react'

import './contactform.css';

//COMPONENTES
import Button from '../button/button'

//CONTEXT
import { AppContext } from '../../context/AppContest'


function ContactForm(props){
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        message: ''
    })
    const[isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)    /*Controla o estado durante o envio */
    const [formSubmitted, setFormSubmitted] = useState(false)           /*Controla o estado após o envio */
    const appContext = useContext(AppContext)

    const handleSubmit = async (e) =>{
        e.preventDefault()           /*Função para pagina nao recarregar apos envio do submit*/ 
        if(isFormValid) {
            setFormSubmitLoading(true)
            try{
                const response = await fetch('https://api.web3forms.com/submit', {     /* Processo para envio em POST */
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({...formData, access_key:"fc44bdd5-097a-4d32-9a1c-0451866e4e6d"})   /*Converter em JSON */
                })
                if(response.ok){
                    setFormSubmitted(true)
                } else{
                    alert('Erro ao enviar')
                }
            } catch(e){
                alert('Erro:', e)
            } finally{
                setFormSubmitLoading(false)
            }
        }
    }
        useEffect(() => {
            const isValidEmail = (email) => {         /*função para validar o email utilizando uma expressão regular (regex) */
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email)
            }

            const isValid = formData.name.trim() &&   /* useEffect para validar o formulário sempre que os dados mudarem */
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()   /*Trim Remove linhas e espaços desnecessarios*/ 

            setIsFormValid(isValid)
        }, [formData])

        const handleChange = (e) => {   /*Para atualizar o estado do formulário conforme o usuário digita */
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            })
        }

    return(
        
            <div className="container">
                
                <div className="contact-form d-flex fd-column al-center">
                <h2>{appContext.languages[appContext.language].contact.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input className="form-input" 
                        type="text"
                        id="name"
                        name="name"
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                       ></input>

                        <input 
                        className="form-input" 
                        type="email"
                        name="email"
                        id="email"
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                       ></input>

                    </div>
                       <div className="d-flex form-group">
                       <textarea 
                       className="form-input"
                       id="messaage"
                       name="message"
                       placeholder={appContext.languages[appContext.language].contact.pl3}
                       rows="4"
                       onChange={handleChange}>
                        
                       </textarea>
                       </div>

                       <div className="al-center d-flex jc-end form-group">
                            {formSubmitted && <p className="text-primary">{appContext.languages[appContext.language].contact.successMsg}</p>}
                            <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading} > 
                            {appContext.languages[appContext.language].general.send}
                            </Button>
                       </div>               
                </form>
                </div>     
            </div>

    )
        
}

export default ContactForm
