import React from 'react';
import {
    useParams, Link, NavLink
} from "react-router-dom";
import { InProductoPsn } from '../components/Products/InProductoPsn';
import '../Styles/filtros.css';
import { IoIosArrowForward } from "react-icons/io";

export const Category = () => {
    const { categoria }=useParams();
    console.log(categoria)
    return (
        <>
            <div id="filtroArbol" className="ml-2">
                <div id="titulo">
                    Filtros
                </div>
                <div class="card border-secondary" >
                    <nav class="nav flex-column">
                        
                        <div className="dropright">
                        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ordenar por <IoIosArrowForward/>
                        </button>
                        <div className="dropdown-menu" id="dropdownCategorias" aria-labelledby="dropdownMenuButton" onMouseLeave={()=>{
                            document.getElementById("dropdownCategorias").click();}}>
                            <Link className="dropdown-item" to="/Playstation"> Precio: menor a mayor </Link>
                            <Link className="dropdown-item" to="/Playstation"> Precio: Mayor a menor </Link>
                            <Link className="dropdown-item" to="/Playstation"> Destacados </Link>
                            <Link  className="dropdown-item" to="/Playstation"> Más vendidos </Link>
                            <Link  className="dropdown-item" to="/Playstation"> Nombre: A-Z </Link>
                            <Link  className="dropdown-item" to="/Playstation"> Nombre: Z-A </Link>
                        </div>
                    </div>    
                    <NavLink className="nav-link " activeClassName="active" to="/">Gift Cards</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to="/">PlayStation Plus</NavLink>
                    <NavLink className="nav-link " activeClassName="active" to="/">Complementos</NavLink>
                    </nav>
                    
                </div>

            </div>
            <div className="container">
                <br/>
                <form className="form-inline ">

                    <div className="row row-cols-xl-6">
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />
                            <InProductoPsn />

                </div>
                </form>
            
                <nav aria-label="...">
                    <br/>
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">Anterior</span>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                    </ul>
                </nav>   
            </div>
        </>
    )
}
