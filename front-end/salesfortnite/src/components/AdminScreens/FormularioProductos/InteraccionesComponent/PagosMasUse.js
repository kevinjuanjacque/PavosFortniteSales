import React from 'react'

export const PagosMasUse = () => {
    return (
        <div className="container">
            <h4 align="center">Metodos de pago más utilizados</h4>
            <hr/>
            <div className="card mt-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre Pago</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Webpay</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Khiphu</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Flow</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
