import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Principal from "./Principal"
import Login from "./Login"
import Registro from "./Registro"
import Admin from "./Admin"
import Carro from "./Carro"
import AddCarro from "./AddCarro"
const App = () => (
    <BrowserRouter>
        <Route path="/" exact component={Principal}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Registro" component={Registro}/>
        <Route path="/Admin" component={Admin}/>
        <Route path="/Carro" exact component={Carro}/>
        <Route path="/Carro/AddCarro" exact component={AddCarro}/>
    </BrowserRouter>
)
export default App