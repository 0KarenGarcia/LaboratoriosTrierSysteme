import React, {Component} from 'react';
import './login.css';

class SingIn extends Component {
    render() {
        return (
          <div className="home">
          <div className="cardLogin">
            <form>
            <div>
            <a className="navbar-brand" href="./home">
            <img  className="img-fluid"src="https://i.postimg.cc/R08jQx4w/e4dd6ade-7b9b-4073-b5c9-c4c6b532acfc-200x200.png"  width="110" height="100" ></img>
            </a>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
              </input>
              <label for="exampleInputEmail1">Email</label>
            </div>
            <div class="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              <label for="exampleInputPassword1">Password</label>
            </div>
            <div class="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Hacepto terminos y condiciones </label>
            </div>
            <button type="submit" className="btn btn-outline-primary">Entrar</button>
          </form>
          </div>
         </div>

            )
      
    }
}
export default SingIn;