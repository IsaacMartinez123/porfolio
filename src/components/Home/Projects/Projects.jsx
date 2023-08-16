import './Projects.css'
import { projects } from '../../utils/utils'

const Projects = () => {

    return(
        <section id='procjets'>
        <h1>Proyectos</h1>
        <div className='Projects'>
            {projects.map((project) => (
            <article class="card">
                <img class="card__background" src={project.img} alt="PI COUNTRIES" width="1920" height="2193"/>
                <div class="card__content">
                    <h2 class="card__title">{project.name}</h2>
                    
                    <p>{project.desc}</p>   
                    <div className="buttons">
                        <a href={project.link}>
                            <button class="card__button">Ver Proyecto</button>
                        </a>
                        <a href={project.repo}>
                            <button class="card__button">Ver Repositorio</button>
                        </a>
                    </div>
                </div>
            </article>
            ))}
        </div>
        </section>
    );
}

export default Projects;