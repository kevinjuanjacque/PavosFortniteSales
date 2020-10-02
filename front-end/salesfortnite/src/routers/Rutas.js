
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
import {useDispatch, useSelector} from 'react-redux'
import { llenarCart } from '../helpers/actions/ActionCart';
import { AdminScreen } from '../pages/AdminScreen';



export const Rutas = () => {
    const dispatch = useDispatch();
    
        ( localStorage.getItem('Products') ) && dispatch(llenarCart( localStorage.getItem('Products') ) ) 

    const auth = useSelector(state => state.auth)
    
    return (
        <Router>

            
            
            <Navbar />
            <ShoppingCart  />
            <Switch>
                
                <Route exact path="/" component={ (auth.name==="Kevin Jake") ?  AdminScreen : Home }/>
                <Route exact path="/Detalle/DetalleProducto" component={ScreenProducto}/>

            
                
            </Switch>

        </Router>
    )
}
