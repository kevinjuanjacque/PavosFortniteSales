import React from 'react';
import {useDispatch} from 'react-redux'

import {BsPerson} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShopping,AiOutlineLogout} from 'react-icons/ai';
import {logOut} from '../../helpers/actions/authAction';

export const User = () => {
    const dispatch = useDispatch();

    const clickLogOut=()=>{
        dispatch(logOut())
    }
    
    return (
        <div className="transparent animate__animated animate__fadeInRight">
            <hr />
            <ul className="list-group list-group-flush mt-5 m-2">
                <li className="list-group-item list-group-item-primary list-group-item-action text-white "><BsPerson /> Mi perfil</li>
                <li className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineShopping /> Mis compras</li>
                <li className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineHeart /> Mis favoritos</li>
                <li onClick={clickLogOut} className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineLogout /> Cerrar sesión</li>
                <li className="list-group-item list-group-item-primary list-group-item-action text-white">X</li>
            </ul>

        </div>
    )
}
