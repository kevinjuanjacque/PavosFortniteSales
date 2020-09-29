import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { cerrarModal } from '../helpers/actions/uiActions';

export const ShoppingCart = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    return (
        
        <>
            <div className={(ui) ? "modal fade show " : "modal" } id="exampleModal" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" >
                <div className="modal-dialog "><div className="modal-content ">
                    <div className="modal-header"><h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
                    <div className="modal-body ">...</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={()=>{
                                    dispatch(cerrarModal());
                                }}
                            >Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
