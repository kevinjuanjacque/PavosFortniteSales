
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
import { ClientScreen } from '../pages/ClientScreen';


import { ClientScreen2 } from '../pages/ClientScreen2';
import { MiPerfil } from '../pages/MiPerfil';
import { SideBarLeft } from '../components/SideBars/SideBarLeft';
import { Nosotros } from '../pages/Nosotros';
import { PromesaValidarToken } from '../helpers/function/PromesaValidarToken';
import { ReLogin } from '../helpers/actions/authAction';


export const Rutas = () => {
    const dispatch = useDispatch();
    ( localStorage.getItem('Products') ) && dispatch(llenarCart( localStorage.getItem('Products') ) );
    
    const auth = useSelector(state => state.auth);
    if( localStorage.getItem('token') && !auth.name ){
        PromesaValidarToken(localStorage.getItem('token')).then((res)=>{
            dispatch(ReLogin(res.email,res.name));
        });
    }
    
    return (
        <Router>

            
            
            <Navbar />
            <ShoppingCart  />
            { (auth.name==="Kevin Jake" || auth.name==="Ignacio Fajardo") ?  
                <AdminRouter /> 
                :
                (<Switch>
                    
                    <Route exact path="/" component={ Home }/>
    
                
                <Route exact path="/ClientScreen" component={  ClientScreen }/>
                <Route exact path="/MisCompras/:idOrden" component={  ClientScreen2 }/>
                <Route exact path="/MiPerfil" component={  MiPerfil }/>



                <Route exact path="/Detalle/DetalleProducto/:id" component={ScreenProducto}/>
                <Route exact path="/Categoria/:categoria" >
                    <SideBarLeft/>
                    <Category/>
                </Route>
                
                <Route exact path="/Nosotros" component={  Nosotros }/>
                
                
                </Switch>)
            }
        </Router>
        )
    
}
