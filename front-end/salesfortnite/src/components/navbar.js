import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/appbar.css';
import { SideBar } from './SideBar';
import {useSelector,useDispatch} from 'react-redux';
import { AuthComponent } from './login/AuthComponent';
import { User } from './perfil/User';

import {AiOutlineShoppingCart} from 'react-icons/ai';
import { abrirModal } from '../helpers/actions/uiActions';

export const Navbar = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);
    
    return (
        <>
        
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand" >
                        <img src="../assets/logo_pavos.png"  alt="imagen" height = "75"/>
                    </Link>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Busca tu producto..." aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>               
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav mr-auto" >
                            
                            <li className="nav-item">
                                <NavLink className="nav-link " activeClassName="active" to="/a">Example</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-outline-light mr-1"
                        onClick={()=>{
                            dispatch(abrirModal())
                        }}
                    ><AiOutlineShoppingCart /> (0)</button>
                    {
                        <SideBar Component={ (state.email) ?  User : AuthComponent  } Name={(state.name) ?  state.name : '' } /> 
                    } 
                    
                </div>
            </nav>
            
        </>
    )
}
