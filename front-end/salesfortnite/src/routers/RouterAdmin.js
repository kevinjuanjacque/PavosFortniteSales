import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { SubNavAdmin } from '../components/Admin/SubNavAdmin'
import { NavBarAdmin } from '../components/NavBarAdmin'
import { Ventas } from '../pages/AdminScreens/VentasAdminScreen'
import { NotFoundScreen } from '../pages/NotFoundScreen'

export const RouterAdmin = () => {
    return (
        <Router>
            
            <NavBarAdmin />
            <SubNavAdmin />
            <Switch>
                <Route exact path="/Administracion/Home/Ventas" component={Ventas}/>
                <Route exact path="/NotFound" component={NotFoundScreen} />
                <Redirect to="/NotFound" />
            </Switch>
        </Router>
    )
}
