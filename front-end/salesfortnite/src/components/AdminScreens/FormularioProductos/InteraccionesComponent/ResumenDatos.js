import React, { useEffect, useState } from 'react';
export const ResumenDatos = () => {

    const [ProductoMasVendido,SetProductoMasVendido] = useState(0);
    useEffect(()=>{
        fetch( `http://localhost:4000/api/product/producto-mas-vendido`, {
            method:'GET'
        }).then((res)=>res.json()).then((sol)=>SetProductoMasVendido(sol.body[0].nombre));
        
    },[])

    const [CategoriaMasPopular,SetCategoriaMasPopular] = useState(0);
    useEffect(()=>{
        fetch( `http://localhost:4000/api/visit/categoria-mas-popular`, {
            method:'GET'
        }).then((res)=>res.json()).then((sol)=>SetCategoriaMasPopular(sol.body[0].nombre_categoria));
        
    },[])

    const [userRegister,setRegister] = useState(0);
    useEffect(()=>{
        fetch( `http://localhost:4000/api/auth/usuarios-registrados`, {
            method:'GET'
        }).then((res)=>res.json()).then((sol)=>setRegister(sol.body[0].cantidad));
        
    },[])

    return (
        <div className="container">
            <h4 align="center">Popularidad</h4>
            <hr/>
            <div className="card mt-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Consulta</th>
                            <th scope="col">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Producto más vendido</td>
                            <td>{ProductoMasVendido}</td>
                        </tr>
                        <tr>
                            <td>Categoría más popular</td>
                            <td>{CategoriaMasPopular}</td>
                        </tr>
                        <tr>
                            <td>Metodo de pago más utilizado</td>
                            <td>Webpay</td>
                        </tr>
                        <tr>
                            <td>Usuarios registrados</td>
                            <td>{userRegister}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}