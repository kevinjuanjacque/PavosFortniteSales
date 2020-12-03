import React from 'react'
import {ClientBar} from '../ClientScreens/ClientBar';
import { IoMdListBox } from "react-icons/io";
import '../../Styles/StyleCompras.css';
import { useParams } from 'react-router-dom';
import { DetalleVenta } from '../../helpers/function/getDetalle';


export const MisCompras = () => {
    const {idOrden} = useParams();
    const detalle = DetalleVenta(idOrden);
    
    

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

                       {
                            (detalle.loading) ? (<></>) : 
                            ( <div class="card border-dark mb-3 CardScrollX" align="center">
                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-sm">
                                                     <h6 align="left">N° Orden: {idOrden}</h6>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="row row-cols-3">
                                            <div class="col-" id="ImgBoleta">
                                                <IoMdListBox color="grey" size="200px" />
                                            </div>

                                            <div class="col-6">
                                                <table class="table">
                                                    <thead align="center">
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Nombre del Producto</th>
                                                            <th scope="col">Precio unitario</th>
                                                            <th scope="col">Cantidad</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody align="center">
                                                        {
                                                            detalle.data.map((p,index)=>{
                                                                return(<tr>
                                                                    <th scope="row">{index}</th>
                                                                    <td>{p.nombre_producto}</td>
                                                                    <td>${p.precio_unitario}</td>
                                                                    <td>{p.cantidad}</td>
                                                                </tr>)
                                                            })
                                                        }
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                                    <div class="card-footer bg-transparent"><h6>Monto total: ${detalle.data.reduce((a,b)=>a+b.precio_unitario*b.cantidad,0)}</h6></div>
                                    </div>
                                    ) 
                        }
                    </div>
                </div>
                </div>
                
            
            </div>
        

        </div>
    )
}