import React, {Component} from 'react';


class NavHome extends Component {
    render() {
        return (
        <nav className="navbar navbar-light" >
            <a className="navbar-brand" href="https://0karengarcia.github.io/LaboratoriosTrierSysteme/#/">
            <img  className="img-fluid"src="https://i.postimg.cc/R08jQx4w/e4dd6ade-7b9b-4073-b5c9-c4c6b532acfc-200x200.png"  width="110" height="100" ></img>
            </a>
            <a href="https://0karengarcia.github.io/LaboratoriosTrierSysteme/#/login" className="btn btn-outline-primary" role="button" aria-disabled="true">Entrar</a>
{/*             <a href="http://localhost:3000/#/login" className="btn btn-outline-primary" role="button" aria-disabled="true">Entrar</a>*/}        </nav>
      
    )
      
    }
}
export default NavHome;