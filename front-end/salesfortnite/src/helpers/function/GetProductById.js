
import { useEffect, useState } from 'react';

export const GetProductById=(id)=>{

    const [Product, setProduct] = useState({
        loading:true,
        data:''
    });    
    
    useEffect(() => {
        fetch( `http://localhost:4000/api/product/por-id/${id}`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setProduct({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setProduct({
                loading:false,
                data:'Error'
            });
        });
    }, [id]);

    return Product;
}

