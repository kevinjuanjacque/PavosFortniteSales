


import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
  
  import { Navbar } from '../components/navbar';
  import { Home } from '../pages/Home';
  import { LoginScreen } from '../pages/LoginScreen';



export const Rutas = () => {
    return (
        <Router>
            
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={LoginScreen} />
            </Switch>

        </Router>
    )
}
