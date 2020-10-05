import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineInteraction, AiOutlineLogout,AiOutlineStock} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs'
import {FcSalesPerformance} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { logOut } from '../../helpers/actions/authAction';


export const ItemAdmin = ({history}) => {
    const dispatch = useDispatch();

    const clickLogOut=()=>{
        dispatch(logOut())
    }
    
    return (
        <>
            <ul className="list-group list-group-flush mt-2 m-2">
            <h5 className="text-white mt-2" > Administración </h5>                         
            
            <Link to="/"  className="list-group-item list-group-item-primary list-group-item-action text-white">
                
                <FcSalesPerformance /> Ventas
                
            </Link>
            <Link to="/Productos"  className="list-group-item list-group-item-primary list-group-item-action text-white">
                
                    <BsPencil /> Productos
                
            </Link>
            <Link to="/Productos/Stock"  className="list-group-item list-group-item-primary list-group-item-action text-white">
                
                    <AiOutlineStock /> Consultar Stock
                
            </Link>
                
                
                                    
            
            <Link to="/actividad" className="list-group-item list-group-item-primary list-group-item-action text-white "><AiOutlineInteraction /> Actividad</Link>
            <li onClick={clickLogOut} className="list-group-item list-group-item-primary list-group-item-action text-white"><AiOutlineLogout /> Cerrar sesión</li>
            <div className="separador" />
            </ul>
        </>
    )
}
