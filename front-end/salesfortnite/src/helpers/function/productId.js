import { useEffect, useState } from 'react';

export const ProductId= () => {
    const [Compras, setCompras] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/product/retonarArrayProduct`, {
            method:'POST',
            body:JSON.stringify({"arrayProduc":localStorage.getItem('Products').split(',')}),
            redirect: 'follow'
            
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setCompras({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setCompras({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return Compras;
}
