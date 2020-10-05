
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
import { Category } from '../pages/Category';
import { AdminRouter } from './AdminRouter';



export const Rutas = () => {
    const dispatch = useDispatch();
    
        ( localStorage.getItem('Products') ) && dispatch(llenarCart( localStorage.getItem('Products') ) ) 

    const auth = useSelector(state => state.auth)
    
    return (
        <Router>

            
            
            <Navbar />
            <ShoppingCart  />
            { (auth.name==="Kevin Jake") ?  
                <AdminRouter /> 
                :
                (<Switch>
                    
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/Detalle/DetalleProducto" component={ScreenProducto}/>
                    <Route exact path="/Categoria/:categoria" component={Category}/>
    
                
                    
                </Switch>)
            }
            

        </Router>
    )
}
