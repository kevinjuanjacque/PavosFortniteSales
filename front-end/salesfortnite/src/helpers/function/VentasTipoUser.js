export const VentaTipoUser = (token) => {

    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/sale/ventas-segun-tipo-usuario`, {
            method: 'GET',
        }).then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            resolve(resultado.body[0]);
        }).catch(()=>{
            
            reject('No se pudo cargar la info');
        });
    });

    
}