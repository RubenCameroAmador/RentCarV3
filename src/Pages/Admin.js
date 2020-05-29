import React, {Fragment } from 'react'
import Nav from '../Components/Nav'
import AdminOpt from "../Components/AdminOpt"
import '../Styles/Admin.css'
import '../Styles/styles.css' 
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
            
        <div style={{ marginTop: "100px" }}>
            <AdminOpt/>
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" style={{marginTop: "50px"}}>Bienvenido Administrador</h2>    
        </div>
        <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
        </div>
        <img src="https://i.ibb.co/SvLHggB/admin.png" alt="imagen Administrador" style = {{width: "25%", marginLeft: "505px"}}></img>
        </Fragment>
        )
    }
}
export default Admin