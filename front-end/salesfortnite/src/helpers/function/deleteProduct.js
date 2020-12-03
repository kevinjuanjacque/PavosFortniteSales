

export const deleteProduct = (id) => {

    console.log(id);

    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/product/eliminar/${id}`, {
            method: 'DELETE',
        }).then((res)=>{
            return res.json();
        })
        .then((resultado)=>{
            console.log(resultado.body)
            resolve(resultado.body);
        }).catch(()=>{
            
            reject('Error de consulta');
        });
    });

    
}
