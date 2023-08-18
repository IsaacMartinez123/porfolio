import './Home.css'
import Carousel from './Carousel/Carousel';
import Projects from './Projects/Projects';
import EducationExperience from './Education_Experience/EducationExperience';
import Divisor from './Divisor/Divisor';
import Contacme from './Contacme/Contacme'
import { Link } from 'react-scroll';

const Home = () => {

    return(
        <>
        <div className="about-Cointainer">
            
            <div class="container">
                <div class="box">
                    <div class="spin-container">
                    <div class="shape">
                        <div class="bd"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='text-about'>
                <h1>Isaac Martinez Isaza</h1>
                <hr class="accessory" />
                <h2>Desarrollador FullStack</h2>
                <p>
                    Soy desarrollador Full Stack, con background de tecnólogo en análisis y desarrollo de sistemas de información, que me ayudó a trabajar en equipo y mejorar la comunicación asertiva al momento de realizar aplicaciones. Tengo conocimientos en metodologías ágiles, control de versiones con GIT, stack de tecnología PERN, frameworks como Laravel, Flutter y motor de base de datos MySQL. He trabajado en proyectos grupales e individuales los cuales me permitieron afinar mis habilidades blandas, tales como el liderazgo, escucha activa, creatividad, adaptabilidad, actitud positiva y pensamiento crítico.
                </p>
            </div>
        </div>

        <div className='skills'>
            <Projects/>
            <div className="divisor">
                <Divisor/>
            </div>
            <Carousel/>
            <EducationExperience/>
            <Contacme/>
        </div>
        <div className="scroll-to-top-button">
        <Link to="top" smooth={true} duration={500}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z" fill="#CCCCCC"/>
            </svg>
        </Link>
        </div>
        </>
    );
}

export default Home;