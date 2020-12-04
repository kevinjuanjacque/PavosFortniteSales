import React from 'react';
import { ComprasPorUser } from './FormularioProductos/InteraccionesComponent/ComprasPorUser';
import { PersonRegister } from './FormularioProductos/InteraccionesComponent/PersonRegister';
import { Visitas } from './FormularioProductos/InteraccionesComponent/Visitas';

export const Interacciones = () => {
    return (
        <div className="card">
            <Visitas />
            <ComprasPorUser />
            <div className=" mb-5 mt-2">
                    
                <PersonRegister />
            
            </div>
        </div>
    )
}
