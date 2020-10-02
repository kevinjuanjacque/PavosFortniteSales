import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';
import { SideBar } from './SideBar';
import {useSelector,useDispatch} from 'react-redux';
import { AuthComponent } from './login/AuthComponent';
import { User } from './perfil/User';

import {AiOutlineShoppingCart} from 'react-icons/ai';
import { abrirModal } from '../helpers/actions/uiActions';

import {CountCart} from './Cart/CountCart'

export const Navbar = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);
    
    return (
        <>
        
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand" >
                        <img src="../assets/logo_pavos.png"  alt="imagen" height = "60"/>
                    </Link>
          
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                       
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Busca tu producto..." aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>  
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">                               
                                    <a id="dropdownProductos" className="nav-link  dropdown-toggle" href="/" data-toggle="dropdown" 
                                    onMouseEnter={()=>{
                                        document.getElementById("dropdownProductos").click();
                                    }}>Productos
                                    </a>
                                        <ul className="dropdown-menu"  onMouseLeave={()=>{
                                        document.getElementById("dropdownProductos").click();}}>

                                            <li className="nav-item">
                                                <a className="dropdown-item" href="/Playstation"> Playstation</a>
                                                <a className="dropdown-item" href="/Xbox"> Xbox One</a>
                                                <a className="dropdown-item" href="/Nintendo"> Nintendo</a>
                                                <a className="dropdown-item" href="/Steam"> Steam</a>
                                                <a className="dropdown-item" href="/Google"> Google</a>
                                                <a className="dropdown-item" href="/Apple"> Apple</a>
                                                <a className="dropdown-item" href="/Riot"> Riot</a>
                                                <a className="dropdown-item" href="/Fortnite"> Fortnite</a>
                                            </li>
                                        </ul>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/Nosotros">Nosotros</NavLink>
                            </li>

                        </ul>
                        
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-outline-light mr-1"
                        onClick={()=>{
                            dispatch(abrirModal())
                        }}
                    ><AiOutlineShoppingCart /> <CountCart/></button>
                    {
                        <SideBar Component={ (state.email) ?  User : AuthComponent  } Name={(state.name) ?  state.name : '' } /> 
                    } 
                    
                </div>
            </nav>
            
        </>
    )
}
