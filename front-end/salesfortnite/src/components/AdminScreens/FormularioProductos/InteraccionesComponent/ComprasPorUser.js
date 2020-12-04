import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { VentaTipoUser } from '../../../../helpers/function/VentasTipoUser';

export const ComprasPorUser = () => {
    
    const [HookVs,setVs]=useState({registrados:0,NotRegistrados:0});
    const data = {
        datasets: [{
            data: [HookVs.registrados, HookVs.NotRegistrados],
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'registrados',
            'no registrados',
        ]

    };
    useEffect(()=>{
        VentaTipoUser().then((res)=>setVs({registrados: res.ventas_usuarios_registrados,NotRegistrados:res.ventas_no_registrados}));
    },[]);
    
    return (
        <div className="container mt-4">
            <h3>Ventas Por usuarios registrados vs usuarios no registrados</h3>
            <hr />
            <div  align="center">
                <Doughnut data={data}  />
            </div>
            <div className="card mt-3">
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Tipo de usuario</th>
                            <th scope="col">Cantidad </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Registrados</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>No registrados</td>
                            <td>3</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
