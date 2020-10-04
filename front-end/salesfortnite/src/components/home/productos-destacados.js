import React from 'react';
import  '../../Styles/enlaces.css';
import  '../../Styles/imagenes.css';
import { ProductoPsn } from '../Products/ProductoPsn';
export const ProductosDestacados = () => { 
    return (
        <div className="container">
            <br></br>
            <h5>PRODUCTOS DESTACADOS</h5>
            <div className="separador" />
                <div className="row row-cols-xl-6" align="center" >
                    
                    <ProductoPsn />
                    <ProductoPsn />
                    <ProductoPsn />
                    <ProductoPsn />
                    <ProductoPsn />
                    <ProductoPsn />
                </div>
        </div>
    )
}