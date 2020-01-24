import React, {Component} from 'react';
import NavStart from '../NavStart/navStart';
import ViewMenuCollection from '../NavStart/ViewCollections/ViewCollection';
import TablaColecciones from '../collections/tablecolecciones/tabla';

class collectionBD extends Component {
    render() {
        return (
            <div className="pagAllCollection">
                <div className="navStart">
                    <NavStart/>
                 </div>
                 <div className="navStart">
                    <ViewMenuCollection/>
                 </div>
                 <div className="tablaColecciones">
                     <TablaColecciones/>
                 </div>

            </div>
         )
      
    }
}
export default collectionBD;