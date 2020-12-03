import React from 'react';
import { AllSales } from '../../helpers/function/allSales';
import { StockProduct } from './StockProduct';

export const Ventas = () => {

    const ventas = AllSales();
    const Meta =100000;
    
    
    


    return ((ventas.loading) ? <></> : (
        <div className="fondo container">
            <div className="row">
                <h3 className=" col-2 ml-2 "> VENTAS </h3>
                <div className="col-6 mt-2 mb-2">
                    <div className="progress">
                        <div 
                            className={ (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta <30) ? "progress-bar progress-bar-striped bg-danger" :
                            (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta < 50 ) ? "progress-bar progress-bar-striped bg-warning" :
                            (ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta < 99 ) ? "progress-bar progress-bar-striped" :
                            "progress-bar progress-bar-striped bg-success"
                        }
                        role="progressbar" id="progreso" 
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                             {ventas.data.reduce((a,b)=>a+b.total,0)*100/Meta}% ( ${ventas.data.reduce((a,b)=>a+b.total,0)} )
                         </div> 
                    </div>
                </div>
                <div className="col-3 mt-1 mb-2">
                        Meta: ${Meta}
                </div>
            </div>
            <div className="separador"/>
            <StockProduct />
        </div>
    )
                        
    )
}
