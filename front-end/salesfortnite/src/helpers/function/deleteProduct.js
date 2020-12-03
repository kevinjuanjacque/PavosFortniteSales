

export const deleteProduct = (id) => {


    const raw = JSON.stringify({"idProducto":id });

    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/product/eliminar`, {
            method: 'POST',
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
