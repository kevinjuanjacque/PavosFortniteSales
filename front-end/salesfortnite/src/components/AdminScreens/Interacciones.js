import React from 'react';
import { ComprasPorUser } from './FormularioProductos/InteraccionesComponent/ComprasPorUser';
import { PagosMasUse } from './FormularioProductos/InteraccionesComponent/PagosMasUse';
import { PersonRegister } from './FormularioProductos/InteraccionesComponent/PersonRegister';
import { Visitas } from './FormularioProductos/InteraccionesComponent/Visitas';

export const Interacciones = () => {
    return (
        <div>
            <Visitas />
            <ComprasPorUser />
            <div className=" mb-5 mt-2">
                <PagosMasUse />

                
                    
                <PersonRegister />
            
            </div>
        </div>
    )
}
