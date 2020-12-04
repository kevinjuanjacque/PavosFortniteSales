export const addCart = ( id ) => {
    localStorage.setItem('Products',
        (localStorage.getItem('Products')) ? [localStorage.getItem('Products'),id] : [id] 
    );
    return {
        type:'agregar-product',
        body:localStorage.getItem('Products').split(',') 
    }
}

export const emptyCart = () => {
    localStorage.removeItem('Products');
    return {
        type:'vaciar-carro'
    }
}

export const llenarCart = (lista) => {
    const listado=lista.split(',');
    
    return {
        type:'Re-llenar-products',
        body: { listado  }
    }
}