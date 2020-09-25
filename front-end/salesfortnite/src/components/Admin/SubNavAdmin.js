import React from 'react'
import { NavLink } from 'react-router-dom'

export const SubNavAdmin = () => {
    return (
        <nav className="navbar colorSubNav navbar-expand-lg navbar-dark  sticky-top animate__animated  animate__fadeIn ">
            
                <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/Administracion/Home/Ventas"> Ventas </NavLink>
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
    )
}
