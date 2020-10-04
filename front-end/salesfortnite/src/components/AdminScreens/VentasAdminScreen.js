import React, { useState } from 'react';
import { Filtros } from './Ventas/filtros';
import { VentasScreen } from './Ventas/VentasScreen';

export const Ventas = () => {
    const [Porcentage, setPorcentage] = useState(0)
    const Meta =100000
    const [Filtro, setFiltro] = useState(
        {
            filtro:"Fecha",
        }
    )
    
    const aumentoProgress=()=>{
        setPorcentage(Porcentage+10);
        if(Porcentage<=100){
            document.getElementById('progreso').style.width=Porcentage.toString()+'%';
        }
    }


    return (
        <div className="fondo container">
            <div className="row">
                <h3 className=" col-2 ml-2 "> VENTAS </h3>
                <div className="col-6 mt-2 mb-2">
                    <div className="progress">
                        <div 
                            className={ (Porcentage<30) ? "progress-bar progress-bar-striped bg-danger" :
                            (Porcentage < 50 ) ? "progress-bar progress-bar-striped bg-warning" :
                            (Porcentage < 99 ) ? "progress-bar progress-bar-striped" :
                            "progress-bar progress-bar-striped bg-success"
                        }
                        role="progressbar" id="progreso" 
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                             {Porcentage}% ( ${Meta*Porcentage/100} )
                         </div> 
                    </div>
                </div>
                <div className="col-3 mt-1 mb-2">
                        Meta: ${Meta}
                </div>
            </div>
            <button onClick={aumentoProgress}> + </button>
            <div className="separador"/>
            <Filtros Filtro={Filtro} setFiltro={setFiltro} />
            <VentasScreen Filtro={Filtro}/>
        </div>
    )
}
