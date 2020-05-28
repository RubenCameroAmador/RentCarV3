import React from 'react'
import Nav from "../Components/Nav"
import Carrucel from "../Components/Carrucel"
import Botones from "../Components/Botones"
import Contact from "../Components/Contact"
class Principal extends React.Component{
    render(){
        return(
            <div>
                <Nav
                str1 = "Como Funciona"
                str2 = "Servicio"
                str3 = "Contacto"
                str4 = "Join"/>
                <Carrucel/>
                <Botones/>
                <Contact/>
            </div>
            
        )
    }
}
export default Principal