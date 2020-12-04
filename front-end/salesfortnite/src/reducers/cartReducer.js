
/*
    const initialState={
        'products':[
            {
                name:
                price:
                id:
                stock:

            }
        ]
    };
*/ 

const initialState={
    'products':[]
};

export const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'agregar-product':
            return {
                'products':action.body
            };

        case 'vaciar-carro':
            return initialState;

        case 'Re-llenar-products':
            return {
                        'products': action.body.listado
                    };
            
        default:
            return state;
    }
}