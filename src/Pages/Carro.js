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
        delate :"",
    };
    async componentDidMount() {
        this.getCar();
    }
    getCar = async () =>{
        const res = await axios.get("http://localhost:4000/cars");
        this.setState({ registro: res.data });
    }
    getID = (id) =>{
        this.state.delate = id;
        console.log(this.state.delate)
    }
    deleteCar = async (id) => {
       await axios.delete("http://localhost:4000/cars/"+id)
       this.getCar();
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
                            <p>*Para eliminar da doble click sobre el registro de la tabla y presione eliminar</p>
                            <Link className="btn-button" onClick={() => this.deleteCar(this.state.delate)}>Eliminar carro</Link>
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
                                <tbody > 
                                    {this.state.registro.map((registro) =>(
                                        <tr onDoubleClick={() => this.getID(registro.idcar)}>
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