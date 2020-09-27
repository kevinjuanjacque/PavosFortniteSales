
import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Home } from '../pages/Home';



export const Rutas = () => {
    return (
        <Router>
            
            <Navbar />

            <Switch>

                <Route exact path="/" component={Home}/>

            
                
            </Switch>

        </Router>
    )
}
