import React from 'react'
class TablaUser extends React.Component{
    constructor(props){
        super(props)
        const vector = this.props;
    }
    state={
        idreserva: "",
        iduser: "",
        idcarro: "",
        fechainicio: "",
        fechafin: "",
    }
    render(){
        return(
            <body>
                <div style={{ marginTop: "100px" }}>
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0" style={{marginTop: "50px"}}>Sus Reservas hasta la fecha son: </h2>    
                </div>
                <div className="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-line"></div>
                </div>
                <div className="row justify-center" style={{marginTop: "10px"}}>
                    <div class="col-md-10" style={{alignItems: "center", alignContent: "center", position: "relative", left: "10%"}}>
                        <div className="tbl-header">
                            <table className="table-configure">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Usuario</th>
                                            <th>Carro</th>
                                            <th>Inicio</th>
                                            <th>Fin</th>
                                        </tr>
                                    </thead>                                       
                                </table>
                        </div>
                        <div className="tbl-content">
                            <table className="table-configure">
                                <tbody>
                                    {
                                        this.props.vector.map((vector) => (
                                            <tr>
                                                <td>{vector.idreserva}</td>
                                                <td>{vector.iduser}</td>
                                                <td>{vector.idcarro}</td>
                                                <td>{vector.fechainicio}</td>
                                                <td>{vector.fechafin}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
                </body>
        )   
    }
}
export default TablaUser