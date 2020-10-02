
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
import {useDispatch} from 'react-redux'
import { llenarCart } from '../helpers/actions/ActionCart';



export const Rutas = () => {
    const dispatch = useDispatch();
    
        ( localStorage.getItem('Products') ) && dispatch(llenarCart( localStorage.getItem('Products') ) ) 
    
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
