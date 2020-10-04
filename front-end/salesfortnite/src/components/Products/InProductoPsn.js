import React from 'react'
import '../../Styles/enlaces.css';
import '../../Styles/botones.css';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

import {useDispatch} from 'react-redux';
import { addCart } from '../../helpers/actions/ActionCart'; 

export const InProductoPsn = () => {

    const dispatch = useDispatch()
    const AgregarProduct = ()=>{
        const id= new Date().getTime();
        dispatch( addCart(id) )
    }
    window.scrollTo(0, 0);
    
    return (
        <div className="col" align="center">
            <br></br>
            
            <Link to="../Detalle/DetalleProducto" className="ZoomImagen">
                <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "170"/>
            </Link>
            <p>$10 PSN GIFT CARD <br/><strong>$7.990</strong></p> 
            <button  className="btn boton" onClick={AgregarProduct}  > <MdAddShoppingCart size="19px"/> AGREGAR</button>        
        </div>
    )

}