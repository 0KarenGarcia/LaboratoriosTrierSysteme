import React, {Component} from 'react';
import Menu from './menu/menu'

class NavStart extends Component {
    render() {
        return (
        <nav className="navbar navbar-light" >
            <form class="form-inline my-2 my-lg-0">
            <a className="navbar-brand" href="./home">
            <img  className="img-fluid"src="https://i.postimg.cc/R08jQx4w/e4dd6ade-7b9b-4073-b5c9-c4c6b532acfc-200x200.png"  width="110" height="100" ></img>
            </a>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <form>
                <Menu/>
            </form>
        </nav>
      
    )
      
    }
}
export default NavStart;