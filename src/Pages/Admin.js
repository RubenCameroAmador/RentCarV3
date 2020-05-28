import React, {Fragment } from 'react'
import Nav from '../Components/Nav'
import AdminOpt from "../Components/AdminOpt"
import '../Styles/Admin.css'
import { Link } from 'react-router-dom'
class Admin extends React.Component{
    render(){
        return (
        <Fragment>
            <div>
               <Nav
                str1 = ""
                str2 = ""
                str3 = ""
                str4 = "Log out"
                /> 
            </div>
            
        <div className = "container" style={{ marginTop: "100px" }}>
            <AdminOpt/>
                <h1 style={{marginLeft: "350px", marginTop: "100px"}}>Bienvenido Administrador</h1>     
        </div>
        </Fragment>
        )
    }
}
export default Admin