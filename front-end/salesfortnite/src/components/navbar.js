import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark ">
                <div className="container">
                    <Link to="/" className="navbar-brand" >Navbar</Link>
                </div>
                
                <Link to="/Login" className="btn btn-light">Iniciar</Link>
            </nav>
            <div className="separador" />
            <nav className="navbar colorSubNav navbar-expand-lg navbar-dark  sticky-top ">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/Playstation"> PlayStation </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Xbox">Xbox one</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Nintendo">nintendo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Steam">steam</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Google">google</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Apple">Apple</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Riot"> riot</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/Fortnite">fornai</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}
