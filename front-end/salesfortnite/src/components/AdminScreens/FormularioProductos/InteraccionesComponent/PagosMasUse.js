import React from 'react'

export const PagosMasUse = () => {
    return (
        <div className="container">
            <h1>Pagos mas usados</h1>
            <hr/>
            <div className="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre Pago</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>khipu</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>RedCompra</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>WePay</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
