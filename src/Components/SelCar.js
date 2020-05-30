import React, {Fragment } from 'react'
import Nav from './Nav'
import '../Styles/Admin.css'
import '../Styles/styles.css'
import DatePicker from 'react-date-picker';
import axios from 'axios'
import "../Styles/Carro.css"
class SelCar extends React.Component{
    state = {
        idreserva: '',
        iduser: '',
        idcarro: '',
        fechainicio: new Date(),
        fechafin: new Date(),
    }
    onChangeiduser = (e) => {
        this.setState({
            iduser: e.target.value
        })
    }
    onChangeidcarro = (e) => {
        this.setState({
            idcarro: e.target.value
        })
    }
    onChange = fechainicio => this.setState({ fechainicio })
    onChangefechafin = fechafin => this.setState({fechafin})
    onSubmit = e => {
        e.preventDefault()
        const res = axios.post('http://localhost:4000/reservas', {
            idreserva: this.validar(),
            iduser: this.state.iduser,
            idcarro: this.state.idcarro,
            fechainicio: JSON.stringify(this.state.fechainicio),
            fechafin: JSON.stringify(this.state.fechafin),
            });
        console.log(res)
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/reservas');
        this.setState({ reservas: res.data });
    }
    validar() {
        var sw = false
        var ram= 1
        while (sw === false) {
            var entro = false;
            var i = 1;
            this.state.reservas.map(reservas => {
                if (reservas.idreserva == ram) {
                   ram = (ram + 1);
                   if(i===1){
                        entro = true;
                        i=i+1;
                   }
                }
            })
            if(entro===false){
                sw=true;
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
                <div className="container Registro-size" style={{ marginTop: "50px" }}>
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <h3 style={{marginLeft: "55px"}}>LLene el formulario de reserva</h3>
                        <div className="form-row">
                            
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="iduser"
                                    name="iduser"
                                    onChange={this.onChangeiduser}
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
                            <h5>Fecha inicio</h5>
                            <DatePicker
                                onChange={this.onChange}
                                value={this.state.fechainicio}
                            />
                            </div>   
                            <div className="col">
                                <h5>Fecha Fin</h5>
                            <DatePicker
                                onChange={this.onChangefechafin}
                                value={this.state.fechafin}
                            />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary" onClick={this.goback}> Reservar </button>
                        </div>
                        
                    </form>
                </div>
            </Fragment>    
        )
    }
}
export default SelCar