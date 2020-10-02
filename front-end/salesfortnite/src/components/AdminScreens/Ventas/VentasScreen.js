import React from 'react';

export const VentasScreen = ({Filtro}) => {
    return (
        <div className="container"  >
            {
                (Filtro.filtro && Filtro.subFiltro && Filtro.tipo) ? (
                    
                    (Filtro.tipo === "Grafico") ?
                        <img className="mt-5" height="500" alt="imagen grfica" src="https://docs.tibco.com/pub/spotfire_web_player/6.0.0-november-2013/es-ES/WebHelp/GUID-418B2936-C878-4771-B874-FA8ECAA39941-display.png" />
                    :(
                        <table className="table mt-5">
                            <thead>
                                <tr>
                                <th scope="col">N de orden</th>
                                <th scope="col">monto total</th>
                                <th scope="col">cantidad</th>
                                <th scope="col">fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                    )

                ) :( <h4 className="mt-5 "> DEBES ELEGIR TODOS LOS PARAMETROS</h4>)
            }
            
        </div>
    )
}
