import React, { Component } from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from './TrierSystemeHome/Home/home'
import Login from './TrierSystemeStart/login/login'


class Routes extends Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
            </HashRouter>
        )
    }
}
export default Routes;