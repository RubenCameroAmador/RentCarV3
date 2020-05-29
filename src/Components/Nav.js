import React, { Component } from 'react'
import '../Styles/styles.css' 
import { Link } from 'react-router-dom'

class nav extends Component{
    render(){
        const {str1, str2, str3, str4} = this.props
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"  id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">RentCar</Link><button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/RentCar">{str1}</Link></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">{str2}</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">{str3}</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Login">{str4}</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default nav