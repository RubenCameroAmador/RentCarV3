import React, {Fragment } from 'react'
import axios from 'axios'
import Nav from '../Components/Nav'
import '../Styles/Registro.css'
class Registro extends React.Component {
    state = {
        nombre: '',
        apellido: '',
        id: '',
        correo: '',
        contraseña: '',
    }
    onChangenombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangeapellido = (e) => {
        this.setState({
            apellido: e.target.value
        })
    }
    onChangecorreo = (e) => {
        this.setState({
            correo: e.target.value
        })
    }
    onChangecontraseña = (e) => {
        this.setState({
            contraseña: e.target.value
        })
    }

    onSubmit = e => {
        /* e.preventDefault() */
        const res = axios.post('https://rentcar-back.herokuapp.com/users', {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            id: this.validar(),
            contraseña: this.state.contraseña,
            correo: this.state.correo,
        });
        console.log(res)
    }

    async componentDidMount() {
        const res = await axios.get('https://rentcar-back.herokuapp.com/users');
        this.setState({ users: res.data });
    }

    validar() {
        var sw = false
        var ram=Math.floor((Math.random() * 100) + 1)
        while (sw === false) {
            var entro = false;
            var i = 1;
            this.state.users.map(users => {
                if (users.id === ram) {
                   ram = Math.floor((Math.random() * 7) + 1);
                   if(i===1){
                        entro = true;
                        i=i+1;
                   }
                }
            })
            if(entro===false){
                sw=true
            }
        }
        return ram
    }

    render() {
        return (
            /*<button onClick={this.handleClick}>
                Send
            </button>*/
            <Fragment>
            <Nav
            str1 = ""
            str2 = ""
            str3 = ""
            str4 = ""/>
            <div className="container Registro-size" style={{ marginTop: "150px" }}>
                <form
                    onSubmit={this.onSubmit}
                >
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="Nombre"
                                onChange={this.onChangenombre}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="Apellido"
                                onChange={this.onChangenapellido}
                            />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Correo @uninorte.edu.co"
                            name="Correo"
                            onChange={this.onChangecorreo}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                onChange={this.onChangecontraseña}
                            />
                        </div>
                    </div>
                    <hr></hr>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Registrar
                    </button>
                </form>
            </div>
            </Fragment>
        )
    }
}
export default Registro