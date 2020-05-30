import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import Nav from "../Components/Nav"
import AdminOpt from "../Components/AdminOpt"
import "../Styles/Carro.css"
import "../Styles/styles.css"


class Bills extends React.Component{
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
        const res = await axios.get("http://localhost:4000/bills");
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
                                            <th>Entrega</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.idbill}</td>
                                            <td>{registro.idusuario}</td>
                                            <td>{registro.idcarro}</td>
                                            <td>{registro.fechaEntrega}</td>
                                            <td>{registro.monto}</td>
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
export default Bills