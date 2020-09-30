import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { emptyCart } from '../helpers/actions/ActionCart';
import { cerrarModal } from '../helpers/actions/uiActions';
import '../Styles/botones.css';

import {AiOutlineCreditCard,} from 'react-icons/ai';

import {BsCardChecklist, BsTrash} from 'react-icons/bs';

export const ShoppingCart = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    return (
        
        <>
            <div className={(ui) ? "modal fade show " : "modal" } id="exampleModal" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" >
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
                        ACA VA LA LISTA
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal"
                                onClick={()=>{
                                    dispatch(emptyCart());
                                }}
                            ><BsTrash /> Vaciar </button>
                            <button type="button" className="btn boton"><AiOutlineCreditCard /> PAGAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
