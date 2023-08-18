import './EducationExperience.css'

const EducationExperience = () => {
    return(
        <>
        <section id='experience'>
        <h1>Experiencia</h1>
        <div className="educationsExperiences">
            <div className="educationExperience">
                <p>Junio 2023 - Julio 2023</p>
                <h2>Desarrollador Movil - Silver Express</h2>
                <div className="tecnologias">
                    <div className="tecnologia">
                        <h3>FrontEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Flutter</li>
                            <li className="diamond-item">Dart</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>BackEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Node js</li>
                            <li className="diamond-item">Express</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>Base De Datos</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Sequialize</li>
                            <li className="diamond-item">PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="educationExperience">
                <p>Mayo 2023 - Julio 2023</p>
                <h2>Teaching Assistant (TA) - Henry</h2>
                <h3>Responsabilidades</h3>
                <ul className="resposbilidades">
                    <li className="diamond-item">Coordinar y guiar a estudiantes en su adaptación al programa.</li>
                    <li className="diamond-item">Apoyar en los primeros pasos y resolver inquietudes.</li>
                    <li className="diamond-item">Asistir en ejercicios y fomentar colaboración grupal.</li>
                    <li className="diamond-item">Contribuir a la mejora de procesos del Bootcamp.</li>
                    <li className="diamond-item">Impulsar la cohesión grupal y comunidad.</li>
                </ul>
            </div>

            <div className="educationExperience">
                <p>Diciembre 2021 - Julio 2022</p>
                <h2>[Academica] Desarrollador Full Stack - SangalTec</h2>
                <div className="tecnologias">
                    <div className="tecnologia">
                        <h3>FrontEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">HTML</li>
                            <li className="diamond-item">Javascript</li>
                            <li className="diamond-item">Bootstrap</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>BackEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Laravel</li>
                            <li className="diamond-item">PHP</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>Base De Datos</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="educationExperience">
                <p>Mayo 2023 - Junio 2023</p>
                <h2>[Academica] Desarrollador Full Stack - PI Countries</h2>
                <div className="tecnologias">
                    <div className="tecnologia">
                        <h3>FrontEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">React</li>
                            <li className="diamond-item">Redux</li>
                            <li className="diamond-item">CSS</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>BackEnd</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Node js</li>
                            <li className="diamond-item">Express</li>
                        </ul>
                    </div>
                    <div className="tecnologia">
                        <h3>Base De Datos</h3>
                        <ul className="diamond-list">
                            <li className="diamond-item">Sequialize</li>
                            <li className="diamond-item">PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section id='education'>
        <h1>Educacion</h1>
        <div className="educationsExperiences">
            <div className="educationExperience">
                <p>Enero 2021 - Enero 2023</p>
                <h2>Tecnólogo en análisis y desarrollo de sistemas de información</h2>
                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target='_blank' rel='noreferrer'>
                    <h3>www.sena.edu.co</h3>
                </a>
            </div>

            <div className="educationExperience">
                <p>Marzo 2023 - Julio 2023</p>
                <h2>Desarrollador Full Stack</h2>
                <a href="https://www.soyhenry.com" target='_blank' rel='noreferrer'>
                    <h3>https://www.soyhenry.com</h3>
                </a>
            </div>
        </div>
        </section>
        </>
    );

}

export default EducationExperience;
