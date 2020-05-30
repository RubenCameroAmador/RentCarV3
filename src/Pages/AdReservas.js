import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import Nav from "../Components/Nav"
import AdminOpt from "../Components/AdminOpt"
import "../Styles/Carro.css"
import "../Styles/styles.css"


class Reservas extends React.Component{
    state= {
        registro: [],
        idcar: "",
        marca: "",
        modelo: "",
        cilindraje: "",
        color: "",
        placa: "",
        puertas: "",
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/reservas");
        this.setState({ registro: res.data });
        console.log(res.data);
    }
    render(){
        return(
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
            <AdminOpt/>
            </div>
            <body>
                <div class="row justify-center" style={{marginTop: "10px"}}>
            
                    <div class="col-md-10" style={{alignItems: "center", alignContent: "center", position: "relative", left: "10%"}}>
                        <div className="tbl-header">
                             <table className="table-configure">
                                     <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Usuario</th>
                                            <th>Carro</th>
                                            <th>Inicio</th>
                                            <th>Fin</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.idreserva}</td>
                                            <td>{registro.iduser}</td>
                                            <td>{registro.idcarro}</td>
                                            <td>{registro.fechainicio}</td>
                                            <td>{registro.fechafin}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </body>  
            </Fragment>
        )
    }
}
export default Reservas