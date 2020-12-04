import { useEffect, useState } from 'react';

export const CargarSearch = (palabra) => {
    const [Products, setProducts] = useState({
        loading:true,
        data:[]
    });    
    
    useEffect(() => {
        fetch( `http://localhost:4000/api/product/buscaByName/${palabra}`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setProducts({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setProducts({
                loading:false,
                data:'Error'
            });
        });
    }, [palabra]);

    return Products;
}