import React, {Component} from 'react';


class SingIn extends Component {
    render() {
        return (
            <form>
            <div class="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </input>
              <label for="exampleInputEmail1">Email </label>
            </div>
            <div class="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              <label for="exampleInputPassword1">Password</label>
            </div>
            <div class="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Hacepto terminos y condiciones </label>
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
          </form>
            )
      
    }
}
export default SingIn;