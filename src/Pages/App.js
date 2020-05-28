import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Principal from "./Principal"
import Login from "./Login"
import Registro from "./Registro"
import Admin from "./Admin"
import Carro from "./Carro"
const App = () => (
    <BrowserRouter>
        <Route path="/" exact component={Principal}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Registro" component={Registro}/>
        <Route path="/Admin" component={Admin}/>
        <Route path="/Carro" exact component={Carro}/>
    </BrowserRouter>
)
export default App