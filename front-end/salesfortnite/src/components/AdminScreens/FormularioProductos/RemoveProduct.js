import React, { useState } from 'react';
import {BsTrash} from 'react-icons/bs';
import { AllProduct } from '../../../helpers/function/AllProduct';
import { deleteProduct } from '../../../helpers/function/deleteProduct';

export const RemoveProduct = () => {

    const [delet,setDelete] = useState([]);
    var products = AllProduct();
    const changeBuscar =(e)=>{
        products.data=products.data.filter( p => p.nombre_producto.indexOf(e.target.value) > -1 );
    }
    return (
        <div>
            <h1>Eliminar Producto</h1>
            <hr />
            <div className="row row-cols-12">
                <div className="form-group col-10">
                    <label htmlFor="nombreProduto"> Buscar producto </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombreProduto" 
                        placeholder="Ej Gift card 10usd psn..."
                        onChange={(e)=>{changeBuscar(e)}}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btnCenter ColorBotones text-white"> Buscar </button>
                </div>
            </div>
            <table className="table table-borderless table-light">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        (!products.loading) && (
                            products.data.map((p)=>{
                                if(   delet.indexOf(d=>d.id_producto===p.id_producto) > -1 ) 
                                {
                                    return ''
                                }
                                    return (<tr key={p.id_producto}>
                                    <th scope="row">{p.id_producto}</th>
                                    <td>{p.nombre_producto}</td>
                                    <td>${p.precio_unitario}</td>
                                    <td><button onClick={()=>{ 
                                        deleteProduct(p.id_producto).then((res)=>window.alert(res)).catch(()=>window.alert('Ocurrrio un error'));
                                        setDelete([...delet,p]);
                                    }} className="btn ColorBotones"> <BsTrash color="white" /> </button></td>
                                </tr>)
                                })
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
