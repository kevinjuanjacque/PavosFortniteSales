

export const uiReducer=(state=false,action)=>{
    switch (action.type) {
        case 'modal-visible':
            return true;

        case 'modal-invisible':
            return false;
            
        default:
            return state;
    }
}