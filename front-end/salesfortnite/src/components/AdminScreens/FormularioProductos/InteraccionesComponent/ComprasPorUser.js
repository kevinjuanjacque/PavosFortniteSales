import React from 'react'

export const ComprasPorUser = () => {
    return (
        <div className="container mt-4">
            <h3>Ventas Por usuarios registrados vs usuarios no registrados</h3>
            <hr />
            <div align="center">
                <img height="500" alt="imgtorta" src="https://thumbs.dreamstime.com/b/icono-de-la-torta-de-infographic-diseño-de-datos-gráfico-de-vector-73570801.jpg"></img>
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
