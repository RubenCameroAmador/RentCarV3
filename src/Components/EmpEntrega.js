import React, {Fragment } from 'react'
import Nav from './Nav'
import '../Styles/Admin.css'
import '../Styles/styles.css'
import DatePicker from 'react-date-picker';
import axios from 'axios'
import "../Styles/Carro.css"
class EmpEntrega extends React.Component{
    state = {
        idbill: '',
        idusuario: '',
        idcarro: '',
        date: new Date(),
        fechaEntrega: new Date(),
        monto: '',
    }
    onChange = date => this.setState({ date })
    onChangeidbill = (e) => {
        this.setState({
            idbill: e.target.value
        })
    }
    onChangeidusuario = (e) => {
        this.setState({
            idusuario: e.target.value
        })
    }
    onChangeidcarro = (e) => {
        this.setState({
            idcarro: e.target.value
        })
    }
    onChangefechaentrega = fechaEntrega => this.setState({fechaEntrega})
    onChangemonto = (e) => {
        this.setState({
            monto: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        const res = axios.post('http://localhost:4000/bills', {
            idbill: this.validar(),
            idusuario: this.state.idusuario,
            idcarro: this.state.idcarro,
            fechaEntrega: JSON.stringify(this.state.fechaEntrega),
            monto: this.state.monto,
            });
        console.log(res)
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/bills');
        this.setState({ bills: res.data });
    }
    validar() {
        var sw = false
        var ram= 1
        while (sw === false) {
            var entro = false;
            var i = 1;
            this.state.bills.map(bills => {
                if (bills.idbill == ram) {
                   ram =( ram + 1);
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
                <div className="container Registro-size" style={{ marginTop: "10px" }}>
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <h3 style={{marginLeft: "55px"}}>LLene el formulario de entrega</h3>
                        <div className="form-row">
                            
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="idusuario"
                                    name="idusuario"
                                    onChange={this.onChangeidusuario}
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
                            <h5>Fecha Recogida</h5>
                            <DatePicker
                                onChange={this.onChange}
                                value={this.state.date}
                            />
                            </div>   
                            <div className="col">
                                <h5>Fecha Devolucion</h5>
                            <DatePicker
                                onChange={this.onChangefechaentrega}
                                value={this.state.fechaEntrega}
                            />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="monto"
                                    name="monto"
                                    onChange={this.onChangemonto}
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
export default EmpEntrega 