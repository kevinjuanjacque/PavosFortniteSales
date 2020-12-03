import React from 'react';
import '../../Styles/imagenes.css';
import '../home/productos-destacados.js';
import '../../Styles/enlaces.css';
import '../../Styles/botones.css';
import { Link, useParams } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

import {useDispatch} from 'react-redux';
import { addCart } from '../../helpers/actions/ActionCart';
import { GetProductById } from '../../helpers/function/GetProductById';


export const DetalleProducto= () => {
    const dispatch = useDispatch()
    const { id }=useParams();
    const AgregarProduct = ()=>{
        dispatch( addCart(id) )
    }

    const producto = GetProductById(id);
    window.scrollTo(0, 0);
    return (
        <>
        <div className="container " >
        
            {
                (producto.loading) ? (<></>):
                ( 
                
                <div className="card mb-3">
                <br></br>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div id="imagenProduct" className="ImagenProducto">
                            <img src="../assets/psn_gift_card.jpeg" alt="imagen" height="500"/>
                        </div>
                        
                    </div>
                    <div className="col-md-8">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                                <li className="breadcrumb-item"><Link to="/Playstation">Playstation</Link></li>
                <li className="breadcrumb-item active" aria-current="page"  >{producto.data[0].nombre_producto}</li>
                            </ol>
                        </nav>
                        <div className="card-body">  
                        <div className= "MetodoPago" >
                            <img src="../assets/metodos_pago.png" alt="imagen" height="300"/>
                        </div>                             
                            <div className="col-sm-8">
                                <h1 className="card-title" >{producto.data[0].nombre_producto}</h1>  
                                <h3>${producto.data[0].precio_unitario}</h3>

                                <button  className="btn boton" onClick={AgregarProduct} > <MdAddShoppingCart size="23px"/> AÑADIR AL CARRITO</button>
                               
                                <p className="card-text"><small className="text-muted"><br/>Compatibilidad: PS5 · PS4 · PS3<br/>Región: EEUU<br/>Marca: PlayStation</small></p>
                                
                            </div>    
                            <p className="card-text"> <br/> Puedes comprar Juegos, DLC's (Add-ons), Peliculas, Shows de TV y más desde la PlayStation Network para PS5, PS4 y PS3.</p>
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
           )
            }
        </div>


        </>
            
        
    )
}
