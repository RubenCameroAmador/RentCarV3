import React, { Fragment } from "react"
import axios from "axios"
import "../Styles/Carro.css"
import "../Styles/styles.css"


class Carro extends React.Component{
    state= {
        registro: [],
        idcar: "",
        marca: "",
        modelo: "",
        cilindraje: "",
        color: "",
        placa: "",
        puertas: "",
    };
    async componentDidMount() {
        const res = await axios.get("https://rentcar-back.herokuapp.com/cars");
        this.setState({ registro: res.data });
        console.log(res.data);
    }
    render(){
        return(
            <Fragment>
            <body>
                    <div class="container" style={{ marginTop: "150px" }}>
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Elige el carro de tu gusto</h2>
                    </div>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-line"></div>
                    </div>
                <div class="row justify-center" >
                    <div class="col-md-10" style={{alignItems: "center", alignContent: "center"}}>
                        <div className="tbl-header"  style={{position: 'relative', left: '10%'}}>
                             <table className="table-configure" >
                                     <thead>
                                        <tr>
                                            <th>MARCA</th>
                                            <th>MODELO</th>
                                            <th>CILINDRAJE</th>
                                            <th>COLOR</th>
                                            <th>No. PUERTAS</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content" style={{position: 'relative', left: '10%' }}>
                            <table className="table-configure">
                                <tbody>
                                    {this.state.registro.map((registro) =>(
                                        <tr>
                                            <td>{registro.marca}</td>
                                            <td>{registro.modelo}</td>
                                            <td>{registro.cilindraje}</td>
                                            <td>{registro.color}</td>
                                            <td>{registro.puertas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </body>  
            </Fragment>
        )
    }
}
export default Carro