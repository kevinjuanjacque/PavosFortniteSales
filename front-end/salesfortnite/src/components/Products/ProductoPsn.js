import React from 'react'
import { Link } from 'react-router-dom'

export const ProductoPsn = ({nombre,precio,id}) => {
    return (
        <div className="col">
            <br></br>
            
            <Link to={`../Detalle/DetalleProducto/${id}`} className="ZoomImagen">
                <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "170"/>
            </Link>
            <p>{nombre} <br/><strong>${precio}</strong></p> 
                        
        </div>
    )
}
