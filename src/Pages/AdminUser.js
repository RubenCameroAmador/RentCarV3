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
        this.getdata();
    }
    getdata = async () =>{
        const res = await axios.get("http://localhost:4000/users");
        this.setState({ registro: res.data });
    }
    deleteuser = async (id) => {
        await axios.delete("http://localhost:4000/users/"+id);
        this.getdata();
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
            <div class="row justify-center" style={{marginTop: "10px"}}>
                <div class="col-md-10" style={{alignItems: "center", alignContent: "center", position: "relative", left: "10%"}}>
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
                                        <tr onDoubleClick= {() => this.deleteuser(registro.id)}>
                                            <td>{registro.id}</td>
                                            <td>{registro.nombre}</td>
                                            <td>{registro.apellido}</td>
                                            <td>{registro.correo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>* Para eliminar un usuario de doble click sobre el registro al que desea eliminar </p>
                </div>
            </div>
                        
            </Fragment>
        )
    }
}
export default AdminUser