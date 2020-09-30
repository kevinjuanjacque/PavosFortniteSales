import React from 'react';
import { Link } from 'react-router-dom';
import {} from '../../Styles/enlaces.css';
import {} from '../../Styles/imagenes.css';

export const NuevosProductos = () => {
    return(
        <div className="container">
            <br></br>
            <h5>NUEVOS PRODUCTOS</h5>
            <div className="separador" />

            <div className="row row-cols" align="center">
                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>

                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>

                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>

                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>

                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>

                <div className="col">
                        <br></br>
                        <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "150"/>
                        </Link>
                        <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
                </div>
            </div>
           
        </div>
    )
}
