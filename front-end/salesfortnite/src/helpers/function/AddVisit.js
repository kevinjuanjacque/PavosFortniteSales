import { useEffect, useState } from 'react'

export const AddVisit = () => {
    
    const [Visit, setVisit] = useState({
        loading:true,
        data:''
    });   

    useEffect(() => {
        fetch( 'http://localhost:4000/api/visit/agregar', {
            method: 'POST'
        })
        .then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            setVisit({
                loading:false,
                data:resultado.body
            });
        }).catch((err)=>{
            setVisit({
                loading:false,
                data:'Error'
            });
        });
    }, []);

    return Visit;
}
       
