import { useEffect, useState } from 'react';

export const GetCategoriaMasPopular= () => {
    const [CategoriaMasPopular, SetCategoriaMasPopular] = useState({
        loading:true,
        data:''
    });    
   
    useEffect(() => {
        fetch( `http://localhost:4000/api/visit/categoria-mas-popular`, {
            method:'GET'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            SetCategoriaMasPopular({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            SetCategoriaMasPopular({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return CategoriaMasPopular;
}
