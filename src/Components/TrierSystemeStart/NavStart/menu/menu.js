import React, {Component} from 'react';

class Menu extends Component {
    
        constructor() {
          super();
          
          this.state = {
            showMenu: false,
          }
          
          this.showMenu = this.showMenu.bind(this);
        }
        
        showMenu(event) {
          event.preventDefault();
          
          this.setState({
            showMenu: true,
          });
        }
      
        render() {
          return (
            <div>
              <button onClick={this.showMenu} className="btn btn-outline-info">
              <i class="fas fa-bars"></i>
              </button>
              
              {
                this.state.showMenu
                  ? (
                    <div className="menu">
                      <button className="btn btn-outline-info"> Editar</button>
                      <button className="btn btn-outline-info"> Grafica </button>
                      <button className="btn btn-outline-info"> Ajuste </button>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>
          );
        }
      }
export default Menu;