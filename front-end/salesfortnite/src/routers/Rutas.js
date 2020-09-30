
import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { ShoppingCart } from '../components/ShoppingCart';
import { Home } from '../pages/Home';
import { ScreenProducto } from '../pages/ScreenProducto';



export const Rutas = () => {
    return (
        <Router>
            
            <Navbar />
            <ShoppingCart  />
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/Detalle/DetalleProducto" component={ScreenProducto}/>

            
                
            </Switch>

        </Router>
    )
}
