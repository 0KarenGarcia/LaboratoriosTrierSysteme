import React, {Component} from 'react';
import home from './home.css';
import NavHome from '../Nav/NavHome'

class Home extends Component {
    
    render() {
        return (
        <div className="home">
           <div>
               <NavHome/>
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
                <button className="btn btn-outline-info">Sign Up</button>
                </div>
            </div>
        </div>
      )
      
    }
}
export default Home;