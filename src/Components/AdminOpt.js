import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../Styles/AdminOpt.css"
class AdminOpt extends React.Component{
    render(){
        return(
            <div className="menu-header">
                <div class="row center">
                    <div class="col-md-4">
                        <Link className="link-button" to="/Carro">Carro</Link>
                    </div>
                    <div class="col-md-4 center">
                    <Link className="link-button" to="/Admin/Reserva">Reserva</Link>
                    </div>
                    <div class="col-md-4 center">
                    <Link className="link-button" to="/Admin/Carro" style={{marginLeft: "100px"}}>Cualquiera</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminOpt