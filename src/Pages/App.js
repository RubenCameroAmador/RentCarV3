import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Principal from "./Principal"
import Login from "./Login"
import Registro from "./Registro"
import Admin from "./Admin"
import Carro from "./Carro"
import AddCarro from "./AddCarro"
import Reserva from "./Reserva"
import Entrega from "./Entrega"
import AdminUser from "./AdminUser"
import AddEntrega from "./AddEntrega"
import EntregaAd from "./AdReservas"
import Factura from "./Facturas"
import Place from "./Places"
const App = () => (
    <BrowserRouter>
        <Route path="/" exact component={Principal}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Registro" component={Registro}/>
        <Route path="/Admin" component={Admin}/>
        <Route path="/Carro" exact component={Carro}/>
        <Route path="/Carro/AddCarro" exact component={AddCarro}/>
        <Route path="/Reserva" component={Reserva}/>
        <Route path="/Entrega" component={Entrega}/>
        <Route path="/usuario" component={AdminUser}/>
        <Route path="/AddEntrega" exact component={AddEntrega}/>  
        <Route path ="/Reservas" exact component = {EntregaAd}/>
        <Route path ="/Bill" exact component = {Factura}/>
        <Route path = "/Places" component = {Place}/>
    </BrowserRouter>
)
export default App