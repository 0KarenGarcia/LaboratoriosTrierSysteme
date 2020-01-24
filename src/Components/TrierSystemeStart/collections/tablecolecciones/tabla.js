import React, {Component} from 'react';
import MedecinaData from '../../../../BDprovisional/colleccionesBD'

class TablaColecciones extends Component {
    constructor() {
        super();
        
        
    }
    render() {
        return (
            <div className="container">

                 <div className="dropdown dropright">
                    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">AMOXICILINA</button>
                    <div className="dropdown-menu">
                    <li className="dropdown-item">Forma Farmacéutica: Tabletas</li>
                    <li className="dropdown-item">Laboratorio: APOTEX</li>
                    <li className="dropdown-item">Sustancia: ÁCIDO CLAVULÁNICO ,AMOXICILINA</li>
                    <li className="dropdown-item">Presentación:  Tabletas , 875/125 mg</li>
                    </div>
                </div>
            </div>
            )
        
        }
    }
    export default TablaColecciones;