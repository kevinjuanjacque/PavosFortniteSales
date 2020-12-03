import { useEffect, useState } from 'react';

export const GetMisCompras= () => {
    const [Compras, setCompras] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch( `http://localhost:4000/api/sale/misCompras/`, {
            method:'POST',
            headers: myHeaders,
            body:JSON.stringify({"token":localStorage.getItem('token')}),
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
