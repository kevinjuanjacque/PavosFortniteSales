import React from 'react'
import { 
    Switch,
    Route
} from 'react-router-dom';
import { Interacciones } from '../components/AdminScreens/Interacciones';
import { ProductosAdmin } from '../components/AdminScreens/ProductosAdmin';
import { StockProduct } from '../components/AdminScreens/StockProduct';
import { AdminScreen } from '../pages/AdminScreen';

export const AdminRouter = () => {
    return (
            <Switch>
                <Route exact path="/" component={AdminScreen}/>
                <Route exact path="/Productos" component={ProductosAdmin}/>
                <Route exact path="/Productos/Stock" component={StockProduct}/>
                <Route exact path="/Actividad" component={Interacciones} />
            </Switch>
    )
}
