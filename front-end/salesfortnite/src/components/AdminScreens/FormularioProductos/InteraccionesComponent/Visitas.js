import React from 'react'

export const Visitas = () => {
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
                        <tr>
                            <td>/Playstation</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>/Playstation/DetalleProducto</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>/</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
