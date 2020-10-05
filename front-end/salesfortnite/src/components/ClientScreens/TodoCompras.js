import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdListBox } from "react-icons/io";
import '../../Styles/StyleCompras.css'
import { ClientBar } from './ClientBar';


export const TodoCompras = () => {
    return (
        <div align="center">
            <div className="container mt-1 row row-cols-10">
                <div className="col-2">
                    <ClientBar/>  
                </div>
                <div className="col-9">
                    <div class="card border-dark mb-3 CardScrollX">
                    
                        <div class="card-header" >
                            Mis compras
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead align="center">
                                    <tr>
                                    <th scope="col">N° Orden</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Plataforma de pago</th>
                                    <th scope="col">Método de pago</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody align="center">
                                    <tr>
                                    <th scope="row">75626</th>
                                    <td>01/10/2020</td>
                                    <td>Khipu</td>
                                    <td>Transferencia</td>
                                    <td>Entregada</td>
                                    <td><Link className="btn boton" to="/ClientScreen2"> <IoMdListBox size="20px"/> Ver orden</Link></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">72832</th>
                                    <td>03/10/2020</td>
                                    <td>Khipu</td>
                                    <td>Transferencia</td>
                                    <td>Entregada</td>
                                    <td><Link className="btn boton" to="/ClientScreen2"> <IoMdListBox size="20px"/> Ver orden</Link></td>
                                    
                                    </tr>
                                    <tr>
                                    <th scope="row">84726</th>
                                    <td>05/10/2020</td>
                                    <td>Khipu</td>
                                    <td>Transferencia</td>
                                    <td>Entregada</td>
                                    <td><Link className="btn boton" to="/ClientScreen2"> <IoMdListBox size="20px"/> Ver orden</Link></td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
