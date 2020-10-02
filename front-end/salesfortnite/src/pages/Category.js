import React from 'react';
import {
    useParams, Link
} from "react-router-dom";
import { ProductoPsn } from '../components/Products/ProductoPsn';

export const Category = () => {
    const { categoria }=useParams();
    return (
        <>
        
            <div className="container">
                <br/>
                <form className="form-inline ">
                    <div className="dropdown">
                        Ordenar por: &nbsp;
                        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Precio: menor a mayor
                        </button>
                        <div class="dropdown-menu" id="dropdownCategorias" aria-labelledby="dropdownMenuButton" onMouseLeave={()=>{
                            document.getElementById("dropdownCategorias").click();}}>
                            <Link className="dropdown-item" href="/Playstation"> Destacados </Link>
                            <Link  className="dropdown-item" href="/Playstation"> Más vendidos </Link>
                            <Link  className="dropdown-item" href="/Playstation"> Nombre: A-Z </Link>
                            <Link  className="dropdown-item" href="/Playstation"> Nombre: Z-A </Link>
                        </div>
                    </div> 

                    <div className="dropdown">
                        &nbsp;Filtrar por: &nbsp;
                        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ninguno
                        </button>
                        <div className="dropdown-menu" id="dropdownCategorias" aria-labelledby="dropdownMenuButton" onMouseLeave={()=>{
                            document.getElementById("dropdownCategorias").click();}}>
                            <Link className="dropdown-item" href="/Playstation"> Gift cards </Link>
                            <Link  className="dropdown-item" href="/Playstation"> Playstation Plus </Link>
                            <Link  className="dropdown-item" href="/Playstation"> Complementos </Link>
                        </div>
                    </div> 
                </form>

               
                <div className="row row-cols" align="center">
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />
                        <ProductoPsn />

                </div>
           
            </div>
        </>
    )
}
