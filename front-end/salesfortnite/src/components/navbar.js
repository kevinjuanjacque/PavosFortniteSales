import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';

export const Navbar = () => {
    return (
        <>
<<<<<<< HEAD
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
                                <NavLink className="nav-link" activeClassName="active" to="/Playstation"> PlayStation </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Xbox">Xbox One</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Nintendo">Nintendo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Steam">Steam</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Google">Google</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Apple">Apple</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Riot">Riot</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Fortnite">Fortnite</NavLink>
                            </li>
                        </ul>
                    </div>
                
                <Link to="/Login" className="btn btn-light">Iniciar Sesión</Link>
=======
            <div className=" colorDegradientLinear border-bottom-0 ">

                
                    <div className="container " >
                        <div className="row row-cols-2 ">
                            <div className="col mt-2 mb-2">
                                <Link to="/" className="text-white" >Navbar</Link>
                            </div>
                            <div className="col mt-2 mb-2" id="nav1">
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
>>>>>>> 0ff1210e8858e223950539875596494b8550d936
                </div>
            </nav>
            
        </>
    )
}
