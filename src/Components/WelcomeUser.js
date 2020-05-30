import React from 'react'
import Usuario from '../Pages/Usuario'
class WelcomeUser extends React.Component{
    constructor(props){
        super(props)
        const usernombre = this.props
    }
    render(){
        return(
            <div className= "row justify-center">
                <h1 style={{marginLeft: "40px"}}>Bienvenido {this.props.usernombre}</h1>
            </div>
        )
    }
}
export default WelcomeUser