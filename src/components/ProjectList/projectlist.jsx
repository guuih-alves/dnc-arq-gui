import { useState, useEffect, useContext } from 'react'
import './Projectlist.css'

//ASSETS
import LikedFilled from '../../assets/like.svg'
import LikeOutline from '../../assets/like_normal.svg'

//COMPONENTS
import Button from '../button/button'

//CONTEXT
import { AppContext } from '../../context/AppContest'

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectList(props){
    const [projects, setProjects] = useState([]);   /* projects é valor do estado atual // Setprojects é funcao que vai att o valor */
    const [favProjects, setFavProject] = useState ([])
    const appContext = useContext(AppContext)

    const habndleSavedProjects = (id) =>{         /* Função para gerenciar projetos favoritos */
        setFavProject((prevFavProjects) => {
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId  => projectId !== id))
            } else{
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [... prevFavProjects, id]
            }
        })
    }

    useEffect(() => {         /* Carregando dados do Session Storag */
        const fetchData = async () => {

        try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
       
        } catch (error) {
        setProjects([]);
        }
        };
        
        fetchData();
        }, []);

        useEffect (()=> {
            const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
            if(savedFavProjects){
                setFavProject(savedFavProjects)
            }
        }, [])

    return(
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {
                    projects ?
                    projects.map((project) =>(                /* Renderização condicional dos ícones de curtida */
                        <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                             <div 
                                    className="thumb tertiary-background"
                                    style={{backgroundImage: `url(${project.thumb})`}}
                                    ></div>
                               <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={() => habndleSavedProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ? LikedFilled : LikeOutline} height="20px" /> 
                                </Button>             
                               
                        </div>     /*  ...? ... :  (   Atua como If/else ) */
                    )) : null
                }            
                </div>   
            </div>
    )
        
}

export default ProjectList