import React from 'react';
import '../../Styles/StockStyle.css';
export const StockProduct = () => {
    return (
        <div className="container mt-2">
            <h1> Stock de productos </h1>
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
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            
                            <div className="row" >
                                <div className=" normal mr-2 ml-2" >
                                
                                </div>
                                normal
                            </div>
                        </td>
                        <td>Gift Card 10usd PSN</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td scope="row">
                        <div className="row" >
                                <div className=" critico mr-2 ml-2" >
                                
                                </div>
                                critico
                            </div>
                        </td>
                        <td>Gift Card 20usd PSN</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <div className="row" >
                                <div className=" superavit mr-2 ml-2 " >
                                </div>
                                superavit
                            </div>
                        </td>
                        <td >Gift Card 50usd PSN</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
