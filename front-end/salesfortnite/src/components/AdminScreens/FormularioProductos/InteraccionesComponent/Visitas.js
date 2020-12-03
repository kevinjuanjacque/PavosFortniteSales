import React from 'react'
import { GetVisita } from '../../../../helpers/function/GetVisitas'

export const Visitas = () => {

    const visitas = GetVisita();
    return (
        <div className="container mt-5">
            <h1>VISITAS</h1>
            <hr />
            <div className="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">URL</th>
                            <th scope="col">Cantidad de visitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!visitas.loading) &&
                            (visitas.data.map(v=>{
                                return (<tr>
                                <td>{v.alias_url}</td>
                                <td>{v.cant}</td>
                            </tr>)
                            }))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
