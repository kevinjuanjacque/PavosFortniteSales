import React, { useEffect } from 'react';
import { AllSales } from '../../helpers/function/allSales';
import { ComprasPorUser } from './FormularioProductos/InteraccionesComponent/ComprasPorUser';
import { PagosMasUse } from './FormularioProductos/InteraccionesComponent/PagosMasUse';
import { PersonRegister } from './FormularioProductos/InteraccionesComponent/PersonRegister';
import { ResumenDatos } from './FormularioProductos/InteraccionesComponent/ResumenDatos';
import { StockProduct } from './StockProduct';

export const ResumenAdmin = () => {

    const ventas = AllSales();
    const Meta =1000000;
    
    
    useEffect(()=>{
        if(!ventas.loading){
            document.getElementById('progreso').style.width=ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta.toString()+'%'
        }
    },[ventas])


    return ((ventas.loading) ? <></> : (
        <div className="fondo container">
            <h1 align="center">RESUMEN</h1>
            <div className="separador"/>
            <div className="row">
                <h5 className=" col-2 ml-2 ">Progreso ventas</h5>
                <div className="col-6 mt-2 mb-2">
                    <div className="progress">
                        <div 
                            className={ (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta <30) ? "progress-bar progress-bar-striped bg-danger" :
                            (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta < 50 ) ? "progress-bar progress-bar-striped bg-warning" :
                            (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta < 99 ) ? "progress-bar progress-bar-striped" :
                            "progress-bar progress-bar-striped bg-success"
                        }
                        role="progressbar" id="progreso" 
                         aria-valuenow="100" aria-valuemin="00" aria-valuemax="100" >

                             {ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta}% ( ${ventas.data.reduce((a,b)=>a+b.total,0)} )


                         </div> 
                    </div>
                </div>
                <div className="col-3 mt-1 mb-2">
                        Meta: ${Meta}
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm">
                    <ComprasPorUser />
                    
                </div>
                <div className="col-sm">
                    <ResumenDatos />
                    
                </div>
                
            </div>
            
        </div>
    )
                        
    )
}
