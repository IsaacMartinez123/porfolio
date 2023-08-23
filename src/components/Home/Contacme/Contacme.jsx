import './Contacme.css'

const Contacme = () => {

    return(
        <section id='contacme'>
        <div className="form_container">
            <h1>Contactame</h1>
            <form  action="https://formsubmit.co/isaacsenatecnica123@gmail.com" method="POST">      
                <input name="name" type="text" class="feedback-input" placeholder="Nombre" />   
                <input name="email" type="text" class="feedback-input" placeholder="Correo: isaacsenatecnica123@gmail.com" />
                <textarea name="text" class="feedback-input" placeholder="Ingresa Tu Mensaje"></textarea>
                
                <input type="hidden" name='_captcha' value='false'/>
                <input type="hidden" name='_subject' value='Nuevo Mensaje De Contacto'/>
                <input type="hidden" name="_template" value="table" />

                <input type="submit" value="ENVIAR"/>
            </form>
        </div>
        </section>
    );
}

export default Contacme;
