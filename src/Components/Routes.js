import React, { Component } from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from './TrierSystemeHome/Home/home'
import Login from './TrierSystemeStart/login/login'
import collectionBD from './TrierSystemeStart/collections/pagCollectionsBD';

class Routes extends Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/collectionBD' component={collectionBD}/>
            </HashRouter>
        )
    }
}
export default Routes;