import React , { Component, Fragment } from 'react'

import Nav from '../Components/Nav'
import Local1 from '../Components/Local1'
import Local2 from '../Components/Local2'
import Contact from '../Components/Contact'
import Encabezado from '../Components/Encabezado'
import Lugar from '../Components/Lugar'
class Reserva extends React.Component{
    render(){
        return(
            
            <Fragment>
                <Nav
                str1 = ""
                str2 = ""
                str3 = ""
                str4 = "Join"/>
                <div  style={{ marginTop: "87px" }}>
                
                    <Encabezado/>
                    <div class="row">
                    <Lugar
                    name = "C.C. Portal del Prado"
                    horario = "7 - 12 am | 2 - 6 pm"
                    direccion = "Cl. 53 #46-192. Parqueaderos."
                    telefonos = "323 8732"
                    />
                    <Local1/>
                    </div>
                    <br/>
                    <br/>
                    <div class="row">
                    <Lugar
                    name = "C.C. Viva Barranquilla"
                    horario = "7 - 12 am | 2 - 6 pm"
                    direccion = "Cra 51B #87-50. Parqueaderos"
                    telefonos = "386 5001"
                    />
                    <Local2/>
                    </div>
                    <Contact/>
                    
                </div>
            </Fragment>
        )
    }
}
export default Reserva