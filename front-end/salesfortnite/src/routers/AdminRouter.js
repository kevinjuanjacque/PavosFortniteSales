import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ProductosAdmin } from '../components/AdminScreens/ProductosAdmin'
import { AdminScreen } from '../pages/AdminScreen'

export const AdminRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AdminScreen}/>
                <Route exact path="/Productos" component={ProductosAdmin}/>
            </Switch>
        </Router>
    )
}
