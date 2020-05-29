import React, { Fragment } from "react"
import axios from "axios"
import Nav from "../Components/Nav"
import AdminOpt from "../Components/AdminOpt"
import "../Styles/Carro.css"
import "../Styles/styles.css"
class AdminUser extends React.Component{
    state = {
        registro: [],
        id: "",
        nombre: "",
        apellido: "",
        contraseña: "",
        correo: "",
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/users");
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
            <div className="tbl-header">
                             <table className="table-configure">
                                     <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDO</th>
                                            <th>CORREO</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.id}</td>
                                            <td>{registro.nombre}</td>
                                            <td>{registro.apellido}</td>
                                            <td>{registro.correo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
            </Fragment>
        )
    }
}
export default AdminUser