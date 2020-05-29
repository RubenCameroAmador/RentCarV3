import React, { Component } from 'react'
import '../Styles/styles.css' 
import { Link } from 'react-router-dom'
export default class Botones extends Component{
    render(){
        return (
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
  <script src="assets/mail/jqBootstrapValidation.js"></script>
  <script src="assets/mail/contact_me.js"></script>
  <script src="js/scripts.js"></script>
    <section class="page-section portfolio" id="portfolio">
    <div class="container">

    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Conviértete en un miembro de RentCar</h2>
        
        <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-line"></div>
        </div>
        <div class="row">
            
     
            <div class="col-md-6 col-lg-4 mb-5">
            <Link to = "/Registro">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                   
                    <img class="img-fluid" src="https://i.ibb.co/jghVyVt/Button1.png" alt="" />
                  
                    
                </div>
                </Link>
            </div>
        
            <div class="col-md-6 col-lg-4 mb-5">
            <Link to = "/Reserva">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="https://i.ibb.co/R9HNJ8w/Button2.png" alt="" />
                </div>
            </Link>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
            <Link to = "/Entrega">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="https://i.ibb.co/hZmRBPR/Button3.png" alt="" />
                </div>
            </Link>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 ml-auto"><p class="lead">¡Registrate!, no tiene ningun costo</p></div>
            <div class="col-lg-4 ml-auto"><p class="lead">Reservar es super facil, ¡Hazlo ya!</p></div>
            <div class="col-lg-4 mr-auto"><p class="lead">Contamos con muchos puntos de entrega para tu comodidad</p></div>
        </div>
    </div>
    
    
</section>
      
</body>   )
    }
}