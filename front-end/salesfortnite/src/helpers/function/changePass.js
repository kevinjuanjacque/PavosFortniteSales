export const ChangePass = (contrasenaActual,contrasenaNew) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({contrasenaActual,contrasenaNew, token:localStorage.getItem('token') });

    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/auth/changePass`, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }).then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            resolve(resultado.body);
        }).catch(()=>{
            
            reject('Error de en la contraseña actual');
        });
    });

    
}
