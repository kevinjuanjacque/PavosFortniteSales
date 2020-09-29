import React from 'react';
import { DescripcionProducto } from './DescripcionProducto';
import {MetodoPago} from '../../Styles/imagenes.css';
export const  DetalleProducto= () => {
    return (
        <>
        <div className="container">
        
            <div className="card mb-3">
                <br></br>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="ImagenProducto">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height="500"/>
                        </div>
                        
                    </div>
                    <div className="col-md-8">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li className="breadcrumb-item"><a href="/Playstation">Playstation</a></li>
                                <li className="breadcrumb-item active" aria-current="page">GIFT CARD 10 USD PSN</li>
                            </ol>
                        </nav>
                        <div className="card-body">  
                        <div className= "MetodoPago" >
                            <img src="../assets/metodos_pago.png" alt="imagen" height="300"/>
                        </div>                             
                            <div className="col-sm-8">
                                <h1 className="card-title">GIFT CARD 10 USD PSN</h1>  
                                <h3>$7.990 </h3>
                            
                                <button type="button" className="btn btn-success">AÑADIR AL CARRITO</button>
                                <p className="card-text"><small class="text-muted">Compatibilidad: PS5 · PS4 · PS3</small></p>
                                
                            </div>    
                            <p className="card-text"> <br/>Puedes comprar Juegos, DLC's (Add-ons), Peliculas, Shows de TV y más desde la PlayStation Network para PS5, PS4 y PS3.</p>
                            <strong>Como canjear</strong>
                            <p>
                                Desde la consola: <br/>
                                1. Ir a Playstation Store. <br/>
                                2. En la columna Izquierda en la parte inferior habrá una opción (Canjear Codigo o Redeem Code). <br/> 
                                3. Escribir el codigo. <br/>
                                4. Presionar "canjear" o "redeem code".
                            </p>            
                                        
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>


        </>
            
        
    )
}
