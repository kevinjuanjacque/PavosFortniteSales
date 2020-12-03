import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdListBox } from "react-icons/io";
import '../../Styles/StyleCompras.css'
import { ClientBar } from './ClientBar';
import { GetMisCompras } from '../../helpers/function/GetMisCompras';


export const TodoCompras = () => {

    const misCompras = GetMisCompras();

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
                                    <th scope="col">total Boleta</th>
                                    <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody align="center">

                                    {
                                        (misCompras.loading) ? 
                                        (<></>) : 
                                        (
                                            misCompras.data.map((c)=>{
                                                return(
                                                    <tr>
                                                        <th scope="row">{c.id_venta}</th>
                                                        <td>{c.total}</td>
                                                        <td><Link className="btn boton" to={"/ClientScreen2/"+c.id_venta.toString()}> <IoMdListBox size="20px"/> Ver orden</Link></td>
                                                    </tr>)
                                            })
                                            
                                        )
                                    }  


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
