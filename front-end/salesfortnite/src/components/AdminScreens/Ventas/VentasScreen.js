import React from 'react';
import '../../../Styles/AdminVentas.css';

export const VentasScreen = ({Filtro}) => {
    return (
        <div className="container"  >
            {
                (Filtro.filtro  && Filtro.tipo) ? (
                    
                    (Filtro.tipo === "Grafico") ?
                        <img className="mt-5" height="500" alt="imagen grfica" src="https://docs.tibco.com/pub/spotfire_web_player/6.0.0-november-2013/es-ES/WebHelp/GUID-418B2936-C878-4771-B874-FA8ECAA39941-display.png" />
                    :(
                        <table className="table mt-5">
                            <thead>
                                {
                                (Filtro.filtro==='Fecha') ? 
                                (
                                    <tr>
                                    <th scope="col">N de orden</th>
                                    <th scope="col">monto total</th>
                                    <th scope="col">cantidad</th>
                                    <th scope="col">fecha</th>
                                    </tr>
                                ) : 
                                (
                                    <tr>
                                    <th scope="col">id Categoria</th>
                                    <th scope="col">{(Filtro.filtro==='Categoria') ? 'Categria' : 'Producto'}</th>
                                    <th scope="col">Cantidad Vendida</th>
                                    </tr>
                                ) 
                                }
                            </thead>
                            <tbody>
                                
                            </tbody>
                            </table>
                    )

                ) : ( <h4 className="mt-5 text-center"> Filtro y modo son requeridos</h4>)
            }
            
        </div>
    )
}
