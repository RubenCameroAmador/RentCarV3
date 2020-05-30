import React, { Fragment } from "react"
import Nav from "../Components/Nav"
import axios from 'axios'
import SelCar from "../Components/SelCar"
import WelcomeUser from "../Components/WelcomeUser"
import TablaUser from "../Components/TablaUser"

class Usuario extends React.Component{
    state = {
        nombre: '',
        apellido: '',
        id: '',
        correo: '',
        contraseña: '',
        _id: '',

        registro: [],
        iguales: [],
        idreserva: "",
        iduser: "",
        idcarro: "",
        fechainicio: "",
        fechafin: "",
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({ users: res.data });
        this.getInfo();
        console.log(this.state.id)

        const res2 = await axios.get("http://localhost:4000/reservas");
        this.setState({ registro: res2.data });

        this.setIgual();
    }
    getInfo = () => {
        var parametro = this.props.match.params;
        var cad = JSON.stringify(parametro).split(":")[1].split("}")[0]
        this.state.users.map((users) => {
            if(users._id===cad.substr(1,24)){
                this.state.id = users.id
                this.state.nombre = users.nombre
                this.state.apellido = users.apellido
            } 
        })
    }
    setIgual = () =>{
        var i = 0;
        this.state.registro.map((registro) =>{
            if(registro.iduser===this.state.id){
                this.state.iguales[i] = registro
                i++;
            }
        })
        console.log("Vector de iguales")
        console.log(this.state.iguales)
        this.state.iguales.map((iguales) => {
            console.log(iguales.idreserva+" "+iguales.iduser+" "+ iguales.idcarro)
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
                <div style={{ marginTop: "100px" }}>
                    <WelcomeUser
                        usernombre = {this.state.nombre}
                    />
                    <SelCar
                        idusuario = {this.state.id}
                    />
                    <TablaUser
                        vector = {this.state.iguales}
                    />
                </div>
            </Fragment>
        )
    }
}
export default Usuario