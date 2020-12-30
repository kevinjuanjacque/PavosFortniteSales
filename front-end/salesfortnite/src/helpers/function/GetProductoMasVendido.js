import { useEffect, useState } from 'react';

export const GetProductoMasVendido= () => {
    const [ProductoMasVendido, SetProductoMasVendido] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/product/producto-mas-vendido`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            SetProductoMasVendido({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            SetProductoMasVendido({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return ProductoMasVendido;
}
