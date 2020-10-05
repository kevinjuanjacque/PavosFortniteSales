import React from 'react'
import {BsPerson} from 'react-icons/bs';
import {AiOutlineShopping, AiOutlineLogout} from 'react-icons/ai';
import {useDispatch} from 'react-redux'
import {logOut} from '../../helpers/actions/authAction';
import { Link } from 'react-router-dom';

export const ClientBar = () => {
    const dispatch = useDispatch();
    const clickLogOut=()=>{
        dispatch(logOut())
    }
    return (
        <div>
            <div id="FiltroVistaCliente">
                <ul className="list-group list-group-flush mt-2 m-2">
                    <h5 className="text-white" > Perfil </h5>
                        <Link to="/MiPerfil" className="list-group-item list-group-item-primary list-group-item-action text-white "><BsPerson size="23px"/> Mis datos</Link>
                        <Link to="/ClientScreen" className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineShopping size="23px"/>Mis compras</Link>
                        <Link to="/" onClick={clickLogOut} className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineLogout /> Cerrar sesión</Link> 
                        <div className="separador" />                   
                </ul>   
            </div>            
        </div>
    )
}