

export const CreateVenta = (total) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const cart = localStorage.getItem('products').split(',');
    const raw = JSON.stringify({
        "token":localStorage.getItem('token'), 
        "products": cart.productos.map((p)=>{
            return {id:p,cantidad:1}
        }),
        "total":total    
    });


    return new Promise ((resolve,reject)=>{
        fetch( `http://localhost:4000/api/sale/agregar-venta`, {
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