import { useEffect, useState } from 'react'

export const AddVisit = (url) => {
    
    const [Visit, setVisit] = useState({
        loading:true,
        data:''
    });   
    
    useEffect(() => {
        const token=localStorage.getItem('token');
        
        const  myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch( 'http://localhost:4000/api/visit/agregar', {
            method: 'POST',
            headers:myHeaders,
            body:(token) ? JSON.stringify({ "token":token,"url":url }) : JSON.stringify({ url:url }),
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
    }, [url]);

    return Visit;
}
       
