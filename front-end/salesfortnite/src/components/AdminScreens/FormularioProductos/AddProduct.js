import React, { useState } from 'react'

export const AddProduct = () => {
    const [Form, setForm] = useState({
        NombreProducto:'',
        Categoria:'Default',
        Price:'',
        Description:'',
        SubCategoria:'Default',
        Stock: 0
    })
    const agregarProducto=(e)=>{
        e.preventDefault();
        const body = JSON.stringify({
            "idCategoria":1,
            "idTipoProducto":1,
            "nombreProducto":Form.NombreProducto,
            "precioUnitario":Form.Price,
            "descuento":0,
            "urlImagen":'',
            "descripcion":Form.Description,
            "stock":Form.Stock,
            "costo":0
        })
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch('http://localhost:4000/api/product/agregar',{
            method:'POST',
            body:body,
            headers:myHeaders,
            redirect:"follow"
        }).then((resp)=>resp.json()).then((sol)=>window.alert(sol.body));
        setForm({
            NombreProducto:'',
            Categoria:'Default',
            Price:'',
            Description:'',
            SubCategoria:'Default',
            Stock: 0
        });
    }
    return (
        <div>
            <h1>Añadir Producto</h1>
            <hr />
            <form onSubmit={(e)=>{agregarProducto(e)}}>
            <div className="form-group">
                <label htmlFor="nombreProduto"> Nombre del producto</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nombreProduto" 
                    placeholder="Ej Gift card 10usd psn..." 
                    value={Form.NombreProducto}
                    onChange={(e)=>{setForm({...Form,NombreProducto:e.target.value})}} 
                />
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="Categoria"> Elegir categoria</label>
                    <select className="form-control" 
                        value={Form.Categoria} 
                        required 
                        id="Categoria"
                        onChange={(e)=>{setForm({...Form,Categoria:e.target.value})}} 
                    >
                        <option value='Default' disabled>Seleccionar una...</option>
                        <option> Playstation </option>
                        <option> Xbox one </option>
                        <option> Nintendo </option>
                        <option> Steam </option>
                        <option> Google </option>
                        <option> Apple </option>
                        <option> Riot</option>
                        <option> Fortnite </option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="subCategoria"> Elegir tipo de producto</label>
                    <select className="form-control" 
                        value={Form.SubCategoria} 
                        required 
                        id="subCategoria"
                        onChange={(e)=>{setForm({...Form,SubCategoria:e.target.value})}} 
                    >
                        <option value='Default' disabled>Seleccionar una...</option>
                        <option> Gift cards </option>
                        <option> Suscripciones</option>
                        <option> Complementos</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">

                <div className="col">
                    <label htmlFor="Cost">Costo</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="$0" 
                        id="Cost" 
                        value={Form.costo}
                        onChange={(e)=>{setForm({...Form,costo:e.target.value})}} 
                    />
                </div>
                <div className="col">
                    <label htmlFor="Price">Precio unitario</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="$0" 
                        id="Price" 
                        value={Form.Price}
                        onChange={(e)=>{setForm({...Form,Price:e.target.value})}} 
                    />
                </div>



                <div className="col">
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="stock" 
                            placeholder="00"
                            value={Form.Stock}
                            onChange={(e)=>{setForm({...Form,Stock:e.target.value})}} 

                        />
                    </div>
                    
                </div>
            </div>
            <div className="form-group" >
                        <label htmlFor="FileImege">Subir imagen</label>
                        <input type="file" className="form-control-file" id="FileImege" />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="Descipcion">Añadir descripción</label>
                <textarea className="form-control" id="Descipcion" rows="3" placeholder="Añadir descripción" 
                value={Form.Description}
                onChange={(e)=>{setForm({...Form,Description:e.target.value})}} 
                ></textarea>
            </div>

            <button align="rigth" className="btn btn-block ColorBotones mb-2 text-white"> 
                Agregar Producto
            </button>

            </form>
        </div>
    )
}
