import React from 'react';
import {useParams} from "react-router-dom";
import { InProductoPsn } from '../components/Products/InProductoPsn';
import { GetProduct } from '../helpers/function/GetProduct';
import '../Styles/filtros.css';


export const Category = () => {
    const { categoria }=useParams();
    const data = GetProduct();



    return (
        <>

            <div className="container">
                <br/>
                <div className="row row-cols-xl-6">
                    {
                        (data.loading) ? <h1>CARGANDO DATA ... </h1> :
                        (
        
                            data.data.map(p=>{
                                return (<InProductoPsn key={p.id_producto} nombre_producto={p.nombre_producto} precio_unitario={p.precio_unitario} />)
                            })
                        )
                    }
                </div>
                
                
            </div>
        </>
    )
}
