import React , { Component, Fragment } from 'react'

import Nav from '../Components/Nav'
import Inventario from '../Components/Inventario'
import Contact from '../Components/Contact'

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
                <Inventario/>
                <Contact/>
            </div>
            </Fragment>
        )
    }
}
export default Reserva