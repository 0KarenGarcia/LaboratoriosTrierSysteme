import React, {Component} from 'react';
import MedecinaData from '../../../../BDprovisional/colleccionesBD'


class ViewMenuCollection extends Component {
    constructor(props){
        super(props);
    }
        Getdata(value){
            let medicamento=MedecinaData.Data[0]
            console.log(medicamento);
           

        }
        
    
    render() {
        return (
            <nav className="navbar navbar-light" >
                <button type="button" class="btn btn-info" onClick={this.Getdata} value="antibioticos">Antibióticos</button>
                <button type="button" class="btn btn-info" onClick={this.Getdata} value="Vitaminas">Vitaminas</button>
                <button type="button" class="btn btn-info" onClick={this.Getdata} value="Analgesicos">Analgésicos</button>
            </nav>

            )
      
    }
}
export default ViewMenuCollection;