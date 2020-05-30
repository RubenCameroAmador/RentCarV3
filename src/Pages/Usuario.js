import React, { Fragment } from "react"
import Nav from "../Components/Nav"
import axios from 'axios'

class Usuario extends React.Component{
    state = {
        nombre: 'sirve?',
        apellido: '',
        id: '',
        correo: '',
        contraseña: '',
        _id: '',
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({ users: res.data });
        this.getInfo();
        console.log(this.state.nombre)
    }
    getInfo = () => {
        var parametro = this.props.match.params;
        var cad = JSON.stringify(parametro).split(":")[1].split("}")[0]
        this.state.users.map((users) => {
            if(users._id===cad.substr(1,24)){
                this.state.nombre = users.nombre
                this.state.apellido = users.apellido
            } 
        })
    }
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
            <div style={{ marginTop: "100px", alignContent: "center", alignItems: "center", position: "relative" }}>
        <h1> Hola {this.state.apellido}</h1>
            </div>
            </Fragment>
        )
    }
}
export default Usuario