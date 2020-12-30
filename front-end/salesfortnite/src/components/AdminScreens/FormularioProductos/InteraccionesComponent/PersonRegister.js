import React, { useEffect, useState } from 'react'

export const PersonRegister = () => {

    const [userRegister,setRegister] = useState(0);
    useEffect(()=>{
        fetch( `http://localhost:4000/api/auth/usuarios-registrados`, {
            method:'GET'
        }).then((res)=>res.json()).then((sol)=>setRegister(sol.body[0].cantidad));
        
    },[])

    return (
        <div className="container">
            <h3>Personas Registradas</h3>
            <hr/>

            <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Usuarios registrados</th>
                            <th >{userRegister} </th>
                        </tr>
                    </thead>
                </table>
        </div>
    )
}
