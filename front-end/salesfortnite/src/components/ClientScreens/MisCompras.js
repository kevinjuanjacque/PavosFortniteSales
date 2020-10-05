import React from 'react'
import {ClientBar} from '../ClientScreens/ClientBar';
import { IoMdListBox } from "react-icons/io";
import '../../Styles/StyleCompras.css';


export const MisCompras = () => {
    return (
        <div align="center">
            <div className="container mt-1 row row-cols-10" >
                <div className="col-2">
                    <ClientBar/>  
                </div>
                <div className="col-9">
                <div class="card border-dark mb-3">
                    <div class="card-header">Mis compras</div>
                    <div class="card-body">

                        <div class="card border-dark mb-3 CardScrollX" align="center">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-sm">
                                        <h6 align="left">N° Orden: 1284726</h6>
                                    </div>
                                    <div class="col-sm">
                                        <h6 align="right">Fecha: 05/10/2020</h6>
                                    </div>     
                                </div> 
                            </div>
                    
                            <div class="row row-cols-3">
                                <div class="col-" id="ImgBoleta">
                                    <IoMdListBox color="grey" size="200px"/>
                                </div>

                                <div class="col-6">
                                    <table class="table">
                                        <thead align="center">
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre del Producto</th>
                                            <th scope="col">Precio unitario</th>
                                            <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>GIFT CARD 10 USD PSN</td>
                                            <td>$7.990</td>
                                            <td>Entregada</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>GIFT CARD 20 USD PSN</td>
                                            <td>$14.990</td>
                                            <td>Entregada</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td>GIFT CARD 30 USD PSN</td>
                                            <td>$20.990</td>
                                            <td>Entregada</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div class="card-footer bg-transparent"><h6>Monto total: $43.970</h6></div>
                        </div>

                    </div>
                </div>
                </div>
                
            
            </div>
        

        </div>
    )
}