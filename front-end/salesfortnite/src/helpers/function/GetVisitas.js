import { useEffect, useState } from 'react';

export const GetVisita= () => {
    const [Visita, setVisita] = useState({
        loading:true,
        data:[]
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/visit/`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setVisita({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setVisita({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return Visita;
}
