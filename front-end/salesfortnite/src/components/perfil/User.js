import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {BsPerson} from 'react-icons/bs';
import {AiOutlineShopping,AiOutlineLogout} from 'react-icons/ai';
import {logOut} from '../../helpers/actions/authAction';
import { ItemAdmin } from './ItemAdmin';
import { Link } from 'react-router-dom';

export const User = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    const clickLogOut=()=>{
        dispatch(logOut())
    }
    
    return (
        <div className="transparent animate__animated animate__fadeInRight">
            <hr />
        
            
            {
                    (auth.name==="Kevin Jake" || auth.name==="Ignacio Fajardo" ) ? <ItemAdmin /> : (
                        
                            <ul className="list-group list-group-flush mt-2 m-2">
                            <h5 className="text-white" > Perfil </h5>
                                <Link to="/MiPerfil" className="list-group-item list-group-item-primary list-group-item-action text-white " ><BsPerson /> Mi perfil</Link >
                                <Link to="/ClientScreen" className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineShopping /> Mis compras</Link >
                                <li  onClick={clickLogOut} className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineLogout /> Cerrar sesión</li>
                                <div className="separador" />

                                
                            </ul>
                    )
            }
            

        </div>
    )
}
