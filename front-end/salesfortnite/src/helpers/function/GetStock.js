import { useEffect, useState } from 'react';

export const StockProduc= () => {
    const [stock, setstock] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/product/stock`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setstock({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setstock({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return stock;
}
