import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { emptyCart } from '../helpers/actions/ActionCart';
import { cerrarModal } from '../helpers/actions/uiActions';
import '../Styles/botones.css';

import {AiOutlineCreditCard,} from 'react-icons/ai';

import {BsCardChecklist, BsTrash} from 'react-icons/bs';

export const ShoppingCart = () => {
    const ui = useSelector(state => state.ui);
    const cart = useSelector(state => state.cart);
    const[productCart,setProductCart]=useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        let product = []
        if(cart.products && cart.products.length>0){
            cart.products.forEach(async(p)=>{
                await fetch(`http://localhost:4000/api/product/por-id/${p}`,{
                    method:'GET'
                }).then((resp)=>resp.json()).then((sol)=>{
                    
                    product.push({
                    id:sol.body[0].id_producto,
                    nombre:sol.body[0].nombre_producto,
                    precio:sol.body[0].precio_unitario,
                })}
                );
            });
            setProductCart(product)
        }

        

    },[cart.products])
    return (
        
        <>
            <div className={(ui.modal) ? "modal fade show " : "modal" } id="exampleModal" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" >
                <div className="modal-dialog "><div className="modal-content ">
                    <div className="modal-header"><h5 className="modal-title" id="exampleModalLabel"><BsCardChecklist size="30"/> Lista de compras</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={()=>{
                                dispatch(cerrarModal());
                            }}
                        >
                            <span 
                            aria-hidden="true"
                            >×</span>
                        </button>
                    </div>
                    <div className="modal-body ">
                        <table className="table table-borderless table-light">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                </tr>
                            </thead>
                            <tbody>

                                {   
                                   (cart.products.length>0) && productCart.map((p,index)=>{
                                       
                                    return (<tr key={index}>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.nombre}</td>
                                        <td>${p.precio}</td>
                                        </tr>)
                                   })
                                }

                            </tbody>
                        </table>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal"
                                onClick={()=>{
                                    dispatch(emptyCart());
                                }}
                            ><BsTrash /> Vaciar </button>
                            <button type="button" disabled={(cart.products.length>0) ? false : true} onClick={()=>{
                                
                                const myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");
                                const cart = localStorage.getItem('Products').split(',');
                                const raw = JSON.stringify({
                                    "token":localStorage.getItem('token'), 
                                    "products": cart.map((p)=>{
                                        return {id:p,cantidad:1}
                                    }),
                                    "total":productCart.reduce((a,b)=>a+b.precio,0)     
                                });

                                    fetch( `http://localhost:4000/api/sale/agregar-venta`, {
                                        method: 'POST',
                                        headers: myHeaders,
                                        body: raw,
                                        redirect: 'follow'
                                    }).then((res)=>{
                                        return res.json();
                                    })
                                    .then((resultado)=>{
                                        dispatch(cerrarModal());
                                        dispatch(emptyCart());
                                        window.alert('muchas gracias por tu compra.')
                                    })



                        
                            }} className="btn boton"><AiOutlineCreditCard /> PAGAR TOTAL ${ productCart.reduce((a,b)=>a+b.precio,0) }</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
