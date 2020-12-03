import { useEffect, useState } from 'react';

export const AllSales= () => {
    const [Detalle, setDetalle] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/sale/`, {
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
    }, []);

    return Detalle;
}
