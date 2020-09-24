
import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import { NavBarAdmin } from '../components/NavBarAdmin';

//import { Navbar } from '../components/navbar';
import { AdminScreen } from '../pages/AdminScreen';
import { RutasCliente } from './RutasCliente';


export const Rutas = () => {
    return (
        <Router>
            
            

            <Switch>

                <Route exact path="/Administracion" >
                    <NavBarAdmin />
                    <AdminScreen />
                </Route> 
                
                <Route component={RutasCliente} />

            
                
            </Switch>

        </Router>
    )
}
