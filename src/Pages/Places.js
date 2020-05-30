import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import Nav from "../Components/Nav"
import AdminOpt from "../Components/AdminOpt"
import "../Styles/Carro.css"
import "../Styles/styles.css"


class Places extends React.Component{
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
        const res = await axios.get("http://localhost:4000/places");
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
                <div class="col-md-2">
                        <div className="carro-header">
                            <Link className="btn-button" to="/AddEntrega">Agregar entrega</Link>
                        </div>
                        <div className="carro-header">
                            <Link className="btn-button" to="/EliminarEntrega">Eliminar entrega</Link>
                        </div>
                    </div>
                    <div class="col-md-10" style={{alignItems: "center", alignContent: "center"}}>
                        <div className="tbl-header">
                             <table className="table-configure">
                                     <thead>
                                        <tr>
                                            <th>Lugar</th>
                                            <th>Carro</th>
                                            <th>Direccion</th>
                                            <th>Cantidad de Carros</th>
                                            <th>Gerente</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.idplace}</td>
                                            <td>{registro.idcarro}</td>
                                            <td>{registro.direccion}</td>
                                            <td>{registro.nocarros}</td>
                                            <td>{registro.nombregerente}</td>
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
export default Places