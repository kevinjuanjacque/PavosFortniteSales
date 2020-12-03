import { useEffect, useState } from 'react';

export const DetalleVenta= (id) => {
    const [Detalle, setDetalle] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/sale/detalle/${id}`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setDetalle({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setDetalle({
                loading:false,
                data:'Error'
            });
        });
    }, [id]);

    return Detalle;
}
