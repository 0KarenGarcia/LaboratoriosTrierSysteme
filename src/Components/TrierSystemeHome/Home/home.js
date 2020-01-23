import React, {Component} from 'react';
import home from './home.css';


class Home extends Component {
    render() {
        return (
        <div className="home">
           
           <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="./home">
            <img src="https://i.postimg.cc/R08jQx4w/e4dd6ade-7b9b-4073-b5c9-c4c6b532acfc-200x200.png" width="110" height="100" ></img>
            </a>
            <a class="navbar-brand" href="./home">instrucciones</a>
            <a class="navbar-brand" href="./home">contacto</a>
            <button type="button" class="btn btn-outline-primary">SIGN IN</button>
            </nav>

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
                <button className="btn btn-outline-info">Sign Up</button>
                </div>
            </div>


           


        </div>
      )
      
    }
}
export default Home;