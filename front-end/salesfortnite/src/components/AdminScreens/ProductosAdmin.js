import React, { useState } from 'react';
import { AddProduct } from './FormularioProductos/AddProduct';
import { RemoveProduct } from './FormularioProductos/RemoveProduct';
import { UpdateProduct } from './FormularioProductos/UpdateProduct';

import '../../Styles/ProductoAdmin.css';

export const ProductosAdmin = () => {
    const [SelectProduct, setSelectProduct] = useState("1");

    const cambioSelectProducto =(e) => {
        setSelectProduct(e.target.value)
    }
    return (
        <div className="container mt-5 card">
            <div className="row row-cols-4">
                <div className="col mt-5 " onChange={(e)=>{cambioSelectProducto(e)}}>
                    <div className="form-check" >
                        <label className="form-check-label" htmlFor="exampleRadios1">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1"  defaultChecked={true}/>
                            Añadir Producto
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Remover Producto
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="3"  />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            Actualizar Producto
                        </label>
                    </div>
                </div>
                <div className="col-8">
                        {
                            (SelectProduct==="1") ? (<AddProduct />) :
                            (SelectProduct==="2") ? (<RemoveProduct />) :
                             <UpdateProduct />
                        }
                </div>
            </div>
        </div>
    )
}
