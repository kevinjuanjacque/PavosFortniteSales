import React from 'react';
import { GetProductDestacados } from '../../helpers/function/GetProductDestacados';
import  '../../Styles/enlaces.css';
import  '../../Styles/imagenes.css';
import { ProductoPsn } from '../Products/ProductoPsn';
export const ProductosDestacados = () => { 
    
    const productos = GetProductDestacados();

    return (
        <div className="container">
            <br></br>
            <h5>PRODUCTOS DESTACADOS</h5>
            <div className="separador" />
                <div className="row row-cols-xl-6" align="center" >
                    
                    
                    
                    {
                        (productos.loading ) ? 
                            (<div align="center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>) : 
                            <>
                                {
                                    productos.data.map(p=>{ 
                                        return <ProductoPsn key={p.id_producto}  id={p.id_producto} nombre={p.nombre_producto} precio={p.precio_unitario} /> 
                                    })
                                }
                            </>
                    }
                </div>
        </div>
    )
}