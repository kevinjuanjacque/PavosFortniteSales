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
        VentaTipoUser().then((res)=>setVs({registrados: res.ventas_usuarios_registrados,NotRegistrados:res.ventas_usuarios_no_registrados}));
    },[]);
    
    return (
        <div className="container">
            <h4 align="center">Ventas según tipo de usuario</h4>
            <hr />
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
                            <td>{HookVs.registrados}</td>
                        </tr>
                        <tr>
                            <td>No registrados</td>
                            <td>{HookVs.NotRegistrados}</td>
                        </tr>
                        
                    </tbody>
                </table>
                <Doughnut data={data}  />
            </div>
            
        </div>
    )
}
