import { createContext, useState, useEffect } from "react";
import { getApiData} from "../services/apiServices";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {     
                                                    
    const savedLanguage = localStorage.getItem('lang')      /* Recuperando dados do local */                                         
    const [language, setLanguage] = useState(savedLanguage ?? 'br');    /*language: armazena o idioma atual, verifica se tem idioma salvo*/
    const [languages, setLanguages] = useState({});    /*languages: armazena os dados de idiomas da API*/
    const [loading, setLoading] = useState(true);     /* loading: controla o estado de carregamento */

    useEffect(() => {            /* buscar os dados de idiomas da API:*/
        const fetchLanguages = async () => {
        try {
        const texts = await getApiData('webText');
        setLanguages(texts);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
        };
        
        fetchLanguages();
        }, []);           /*Chave vazia garante que o UserEffect so rode uma vez */

        useEffect(()=> {
            localStorage.setItem('lang', language)   /* salvando dados no local*/
        }, [language])
    
    return (
        <AppContext.Provider value={{language, languages, setLanguage, loading}}>
            {children}
        </AppContext.Provider>
    )
}