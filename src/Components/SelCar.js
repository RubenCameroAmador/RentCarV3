import React, {Fragment } from 'react'
import Nav from './Nav'
import '../Styles/Admin.css'
import '../Styles/styles.css'
import DatePicker from 'react-date-picker';
import axios from 'axios'
import "../Styles/Carro.css"
class SelCar extends React.Component{
    constructor (props){
        super(props)
        const idusuario = this.props
    }
    state = {
        idreserva: '',
        iduser: '',
        idcarro: '',
        fechainicio: new Date(),
        fechafin: new Date(),
        pago: 0,
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
    onChangefechafin = fechafin => { 
        this.setState({fechafin})
    }
    onSubmit = e => {
        e.preventDefault()
        const res = axios.post('http://localhost:4000/reservas', {
            idreserva: this.validar(),
            iduser: this.props.idusuario,
            idcarro: this.state.idcarro,
            fechainicio: JSON.stringify(this.state.fechainicio),
            fechafin: JSON.stringify(this.state.fechafin),
            });
        console.log(res)
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/reservas');
        this.setState({ reservas: res.data });
        this.days_between();
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
        this.state.idcarro = "";
    }
    
    days_between() {
        console.log(this.state.fechainicio+" "+this.state.fechafin.getFullYear())
        var day1 = this.state.fechainicio;
        var day2 = this.state.fechafin
        var d1 = day1.getDate()
        var d2 = day2.getDate()
        this.temd2 = d2
        this.temd1 = d1
        this.state.pago = (d2-d1)*50000;
        console.log(d2-d1)
    }
    aver(){
        this.days_between();
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
                        <h6 style={{marginLeft: "97px"}}>El costo por día del vehiculo es de $50000</h6>
                        <div className="form-row">
                            
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={this.props.idusuario}
                                    name="iduser"
                                    disabled
                                    //onChange={}
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
                                onActiveStartDateChange = {this.aver()}
                                value={this.state.fechafin}
                            />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <button type="submit" className="btn btn-primary" onClick={this.goback}> Reservar </button>
                            </div>
                            <div className="col">
                                <p>El monto a pagar es de: ${this.state.pago}</p>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </Fragment>    
        )
    }
}
export default SelCar