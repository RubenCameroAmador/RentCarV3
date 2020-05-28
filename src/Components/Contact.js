import React, { Component } from 'react'
import '../Styles/styles.css' 
import "../Styles/Contact.css"
export default class Contact extends Component{
    render(){
        return (
         <section class="page-section bg-primary text-white mb-0" id="contact">  
         <div id="contacto">
            <center>
                <h1> Contáctate con nosotros</h1>
            </center>
            <div class="img-container">
            <img className="imagen-contact" src="https://i.ibb.co/hFcdnMm/undraw-contact-us-15o2.png" alt="Imagen de contacto"/>
            <p className="text-contact">
                        Universidad del Norte <br/>
                        Diseño de Software <br/>
                        Rubén Camero Amador <br/>
                        José Rodriguez Gonzales</p>
            </div>
         </div>
         </section> 
    )
}
}