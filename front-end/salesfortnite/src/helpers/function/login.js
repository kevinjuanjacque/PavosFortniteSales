

export const Login = (email,password) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"email":email,"contrasena":password });

    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/auth/login`, {
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
            
            reject('Error de auth');
        });
    });

    
}
