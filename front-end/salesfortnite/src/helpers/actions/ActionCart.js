export const addCart = ( id ) => {
    return {
        type:'agregar-product',
        body:{
            id
        }
    }
}

export const emptyCart = () => {
    return {
        type:'vaciar-carro'
    }
}