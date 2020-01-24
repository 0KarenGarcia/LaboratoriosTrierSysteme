import React, {Component} from 'react';
import './home.css';
import NavHome from '../Nav/NavHome';

class Home extends Component {
    
    render() {
        return (
        <div className="home">
           <div>
               <NavHome/>
           </div>
           
           <div class="cardRedes" >
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><button type="button" class="btn btn-primary"><i className="fab fa-facebook"></i></button></li>
                <li class="list-group-item"><button type="button" class="btn btn-info"> <i className="fab fa-instagram"></i></button></li>
                <li class="list-group-item"><button type="button" class="btn btn-success"><i className="fab fa-twitter"></i></button></li>
            </ul>
            </div>
           
            <div className="card">
            <h5 className="card-header">info</h5>
                <div className="card-body">
                <p className="card-text">>Laboratorios Trier Système
                se enfoca en generar un sistema de orden 
                donde la empresa se sienta libre de hacer
                una buena gestión de sus recursos
                con buena administración.
                Clasificando medicamentos, patentes y toda
                la información necesaria</p>
                <a href="https://0karengarcia.github.io/LaboratoriosTrierSysteme/#/login" className="btn btn-outline-info" role="button" aria-disabled="true">Registrarse</a>
                </div>
            </div>
            
        </div>
      )
      
    }
}
export default Home;