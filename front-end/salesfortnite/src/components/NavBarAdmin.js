import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import icono from  '../assets/icons/AdminIcon.png';
import '../Styles/appbar.css';

export const NavBarAdmin = () => {
    return (
        <>
        <div className=" colorDegradientLinear border-bottom-0">

                
            <div className="container " >
                <div className="row row-cols-3 ">
                    <div className="col mt-2 mb-4">
                        <Link to="/" className="text-white" >Navbar</Link>
                    </div>
                    <div className="col ">
                        <img  src={icono} height="50" alt="imagen logo admin"/>
                    </div>
                </div>
                


            </div>
            </div>
            <nav className="navbar colorSubNav navbar-expand-lg navbar-dark  sticky-top animate__animated  animate__fadeIn ">
            
                <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/"> Ventas </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/">Agragar Producto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/">Remover Producto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/">Actualizar Producto</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
                
        
       
        </>
    )
}
