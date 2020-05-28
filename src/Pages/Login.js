import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Components/Nav'
import '../Styles/Login.css'
class Login extends Component {
    
    state = {
        nombre: '',
        apellido: '',
        id: '',
        correo: '',
        contraseña: '',
        enlace: '',
    }
    onChangenombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangecontraseña = (e) => {
        this.setState({
            contraseña: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault() 
        if(this.ingresoNombre()===true && this.ingresoContraseña()===true){
            if(this.state.nombre==="Admin"){
/*                     this.state.enlace = "/Admin" */
                    window.location.href = "http://localhost:3000/Admin";
                    console.log(this.state.enlace)
            }else{
                /* this.state.enlace = "/RentCar/Login" */
                console.log("Ingreso exitoso")
                console.log(this.state.nombre+" "+this.state.contraseña)
                /*window.location.href = "http://localhost:3000/Login";*/
                
            }
        }else{
            console.log("No coincide la informacion")
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://rentcar-back.herokuapp.com/users');
        this.setState({ users: res.data });
    }
    ingresoNombre(){
        var validar = false;
        this.state.users.map(users => {
            if(users.nombre===this.state.nombre){
                validar=true
            }
        })
        if(validar===true){
            return true;
        }else{
            return false;
        }    
    }
    ingresoContraseña(){
        var validar = false;
        this.state.users.map(users => {
            if(users.contraseña===this.state.contraseña){
                validar=true
            }
        })
        if(validar===true){
            return true;
        }else{
            return false;
        }
        
    }
    render() {
        return (
            <Fragment>
            <Nav
            str1 = ""
            str2 = ""
            str3 = ""
            str4 = ""/>
            />
            <div>
                <div class="wrapper" style={{ marginTop: "150px" }}>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" class="form-control" name="username" placeholder="Nombre/User" required="" autofocus="" onChange={this.onChangenombre}/>
                    <input type="password" class="form-control" name="password" placeholder="Password" required="" onChange={this.onChangecontraseña}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <Link className="navbar-brand" style={{ color: 'black' }} to="/Registro">
                                            Registrarse
                     </Link>
                     <Link className="navbar-brand" style={{ color: 'black' }} to="/Admin">
                                            Admin
                     </Link>
                    </form>
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Login



