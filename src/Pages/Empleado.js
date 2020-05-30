import React, {Fragment } from 'react'
import Nav from '../Components/Nav'
import '../Styles/Admin.css'
import '../Styles/styles.css' 
import Formulario from '../Components/EmpEntrega'
class Empleado extends React.Component{
    render(){
        return (
        <Fragment>
            <div>
               <Nav
                str1 = ""
                str2 = ""
                str3 = ""
                str4 = "Log out"
                /> 
            </div>
            
        <div style={{ marginTop: "100px" }}>
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" style={{marginTop: "50px"}}>Bienvenido</h2>    
        </div>
        <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
        </div>
        <div>
            <Formulario/>
        </div>
           
        </Fragment>
        )
    }
}
export default Empleado