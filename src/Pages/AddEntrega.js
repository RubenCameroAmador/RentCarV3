import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Components/Nav'
import "../Styles/Carro.css"
class AddEntrega extends React.Component{
    state = {
        _id: '',
        idplace: '',
        idcarro: '',
        pais: '',
        departamento: '',
        ciudad: '',
        barrio: '',
        direccion: '',
        nocarros: '',
        nombregerente: '',
    }
    onChange_id = (e) => {
        this.setState({
            _id: e.target.value
        })
    }
    onChangeidplace = (e) => {
        this.setState({
            idplace: e.target.value
        })
    }
    onChangeidcarro = (e) => {
        this.setState({
            idcarro: e.target.value
        })
    }
    onChangepais = (e) => {
        this.setState({
            pais: e.target.value
        })
    }
    onChangedepartamento = (e) => {
        this.setState({
            departamento: e.target.value
        })
    }
    onChangeciudad = (e) => {
        this.setState({
            ciudad: e.target.value
        })
    }
    onChangebarrio = (e) => {
        this.setState({
            barrio: e.target.value
        })
    }
    
    onChangedireccion = (e) => {
        this.setState({
            direccion: e.target.value
        })
    }
    onChangenocarros = (e) => {
        this.setState({
            nocarros: e.target.value
        })
    }
    onChangenombregerente = (e) => {
        this.setState({
            nombregerente: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        const res = axios.post('http://localhost:4000/places', {
            _id: this.state._id,
            idplace: this.state.idplace,
            idcarro: this.state.idcarro,
            pais: this.state.pais,
            departamento: this.state.departamento,
            ciudad: this.state.ciudad,
            barrio: this.state.barrio,
            direccion: this.state.direccion,
            nocarros: this.state.nocarros,
            nombregerente: this.state.nombregerente,
        });
        console.log(res)
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/places');
        this.setState({ places: res.data });
    }
    validar() {
        var sw = false
        var ram=Math.floor((Math.random() * 100) + 1)
        while (sw === false) {
            var entro = false;
            var i = 1;
            this.state.places.map(places => {
                if (places._id == ram) {
                   ram = Math.floor((Math.random() * 7) + 1);
                   if(i==1){
                        entro = true;
                        i=i+1;
                   }
                }
            })
            if(entro==false){
                sw=true
            }
        }
        return ram
    }
    goback = () =>{
        console.log("Ingreso exitoso");
    }
    render(){
        return(
            <Fragment>
                <Nav
                str1 = ""
                str2 = ""
                str3 = ""
                str4 = "Log out"
                />
                <div className="container Registro-size" style={{ marginTop: "150px" }}>
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <h3 style={{marginLeft: "55px"}}>Registro de Entrega a Lugar</h3>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="_id"
                                    name="_id"
                                    onChange={this.onChange_id}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="idplace"
                                    name="idplace"
                                    onChange={this.onChangeidplace}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="idcarro"
                                    name="idcarro"
                                    onChange={this.onChangeidcarro}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="pais"
                                    name="pais"
                                    onChange={this.onChangepais}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="departamento"
                                    name="departamento"
                                    onChange={this.onChangedepartamento}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ciudad"
                                    name="ciudad"
                                    onChange={this.onChangeciudad}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="barrio"
                                    name="barrio"
                                    onChange={this.onChangebarrio}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="direccion"
                                    name="direccion"
                                    onChange={this.onChangedireccion}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nocarros"
                                    name="nocarros"
                                    onChange={this.onChangenocarros}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nombregerente"
                                    name="nombregerente"
                                    onChange={this.onChangenombregerente}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary" onClick={this.goback}> Registrar </button>
                        </div>
                        
                    </form>
                </div>
            </Fragment>    
        )
    }
}
export default AddEntrega 