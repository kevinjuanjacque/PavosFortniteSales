import React from 'react';
import { Link } from 'react-router-dom';


export const ItemAdmin = () => {
    return (
        <>
            <ul className="list-group list-group-flush mt-2 m-2">
            <h5 className="text-white mt-2" > Administración </h5>
            <li className="list-group-item list-group-item-primary list-group-item-action ">
                <Link to="/" className="text-white">
                    Ventas
                </Link>
            </li>
            <li className="nav-item dropdown list-group-item list-group-item-action list-group-item-primary ">                               
                <a id="dropdownProductos" className="nav-link dropdown-toggle text-white" href="/" data-toggle="dropdown" >Productos</a>
                <ul className="dropdown-menu" >

                    <li className="nav-item">
                        <a className="dropdown-item" href="/Playstation"> Agregar Producto</a>
                        <a className="dropdown-item" href="/Xbox"> Modificar Producto </a>
                        <a className="dropdown-item" href="/Nintendo"> Eliminar Producto</a>
                        <a className="dropdown-item" href="/Nintendo"> Consultar Stock</a>
                    </li>
                </ul>
                                    
            </li>
            <li className="list-group-item list-group-item-primary list-group-item-action text-white">Actividad</li>
            </ul>
        </>
    )
}
