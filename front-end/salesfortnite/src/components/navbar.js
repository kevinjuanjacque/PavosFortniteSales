import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';

export const Navbar = () => {
    return (
        <>
            <div className=" colorDegradientLinear border-bottom-0 ">

                
                    <div className="container " >
                        <div class="row row-cols-2 ">
                            <div class="col mt-2 mb-2">
                                <Link to="/" className="text-white" >Navbar</Link>
                            </div>
                            <div class="col mt-2 mb-2" id="nav1">
                                <Link to="/Login" className=" btn btn-light ">Iniciar</Link>
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
