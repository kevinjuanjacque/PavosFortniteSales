import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';
import { SideBar } from './SideBar';


export const Navbar = () => {
    return (
        <>
        
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark sticky-top ">
                <div class="container">
                    <Link to="/" className="navbar-brand" >
                        <img src="../assets/logo_pavos.png"  alt="imagen" height = "75"/>
                    </Link>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Busca tu producto..." aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>               
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav" mr-auto>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Xbox">Xbox One</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Nintendo">Nintendo</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <SideBar />
                </div>
            </nav>
            
        </>
    )
}
