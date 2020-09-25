
import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import { NavBarAdmin } from '../components/NavBarAdmin';

//import { Navbar } from '../components/navbar';
import { AdminScreen } from '../pages/AdminScreen';
import { RouterAdmin } from './RouterAdmin';
import { RutasCliente } from './RutasCliente';


export const Rutas = () => {
    return (
        <Router>
            
            

            <Switch>

                <Route exact path="/Administracion" >
                    <NavBarAdmin />
                    <AdminScreen />
                </Route> 

                <Route strict path="/Administracion" component={RouterAdmin} />
                
                

                <Route component={RutasCliente} />

            
                
            </Switch>

        </Router>
    )
}
