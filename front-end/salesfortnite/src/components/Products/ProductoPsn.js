import React from 'react'
import { Link } from 'react-router-dom'

export const ProductoPsn = () => {
    return (
        <div className="col">
            <br></br>
            
            <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
            </Link>
            <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                        
        </div>
    )
}
