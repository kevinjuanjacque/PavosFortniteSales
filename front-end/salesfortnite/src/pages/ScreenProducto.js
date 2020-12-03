import React from 'react';

import { DetalleProducto } from "../components/Detalle/DetalleProducto";
import { AddVisit } from '../helpers/function/AddVisit';

export const ScreenProducto = () => {
    AddVisit(window.location.pathname);
    return (
        
        <>
            <DetalleProducto/>
            

            
        </>
    )
}
