import React, { Component } from 'react'
import '../Styles/styles.css' 
export default class Contact extends Component{
    render(){
        const {name, horario, direccion, telefonos} = this.props
        return (
           <div style={{position: 'relative', left: '10%'}}>
               <h2>{name}</h2>
               <br/>
               <br/>
               <h4>Horarios de atención:</h4>
               <h4>{horario}</h4>
               <br/>
               <h4>Dirección:</h4>
               <h4>{direccion}</h4>
               <br/>
               <h4>Telefono:</h4>
               <h4>{telefonos}</h4>
           </div>
          
    )
}
}