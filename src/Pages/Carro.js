import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import Nav from "../Components/Nav"
import AdminOpt from "../Components/AdminOpt"
import "../Styles/Carro.css"
import "../Styles/styles.css"


class Carro extends React.Component{
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
        const res = await axios.get("https://rentcar-back.herokuapp.com/cars");
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
                            <Link className="btn-button" to="/Carro/AddCarro">Agregar carro</Link>
                        </div>
                        <div className="carro-header">
                            <Link className="btn-button" to="/Carro/Eliminar">Eliminar carro</Link>
                        </div>
                        <div className="carro-header">
                            <Link className="btn-button" to="/Carro/Modificar">Modificar carro</Link>
                        </div>
                    </div>
                    <div class="col-md-10" style={{alignItems: "center", alignContent: "center"}}>
                        <div className="tbl-header">
                             <table className="table-configure">
                                     <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>MARCA</th>
                                            <th>MODELO</th>
                                            <th>CILINDRAJE</th>
                                            <th>COLOR</th>
                                            <th>PLACA</th>
                                            <th>No. PUERTAS</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.idcar}</td>
                                            <td>{registro.marca}</td>
                                            <td>{registro.modelo}</td>
                                            <td>{registro.cilindraje}</td>
                                            <td>{registro.color}</td>
                                            <td>{registro.placa}</td>
                                            <td>{registro.puertas}</td>
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
export default Carro