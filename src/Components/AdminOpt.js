import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/AdminOpt.css"
class AdminOpt extends React.Component{
    render(){
        return(
            <div className="menu-header">
                <div class="row center">
                    <div class="col-md-2 center">
                        <Link className="link-button" to="/Carro">Carro</Link>
                    </div>
                    <div class="col-md-2 center">
                    <Link className="link-button" to="/Admin/Reserva">Reserva</Link>
                    </div>
                    <div class="col-md-2 center">
                    <Link className="link-button" to="/Usuario">Usuario</Link>
                    </div>
                    <div class="col-md-2 center">
                    <Link className="link-button" to="/Admin/Carro">Entrega</Link>
                    </div>
                    <div class="col-md-2 center">
                    <Link className="link-button" to="/Admin/Carro">Factura</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminOpt