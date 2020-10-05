import React from 'react';
import {BsTrash} from 'react-icons/bs';

export const RemoveProduct = () => {

    return (
        <div>
            <h1>Eliminar Producto</h1>
            <hr />
            <div className="row row-cols-12">
                <div className="form-group col-10">
                    <label htmlFor="nombreProduto"> Buscar producto </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombreProduto" 
                        placeholder="Ej Gift card 10usd psn..." 
                    />
                </div>
                <div className="col-2">
                    <button className="btn btnCenter ColorBotones text-white"> Buscar </button>
                </div>
            </div>
            <table className="table table-borderless table-light">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Gift Card 10usd PSN</td>
                        <td>$1000</td>
                        <td><button className="btn ColorBotones"> <BsTrash color="white" /> </button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Gift Card 20usd PSN</td>
                        <td>$10000</td>
                        <td><button className="btn ColorBotones"> <BsTrash color="white"/> </button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Gift Card 50usd PSN</td>
                        <td>$100000</td>
                        <td><button className="btn ColorBotones"> <BsTrash color="white"/> </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
