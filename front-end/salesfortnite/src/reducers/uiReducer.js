/*
    {
        state{
            modal: bool,
            sidebar: bool
        }
    }
*/

export const uiReducer=(state={
    'modal': false,
    'sidebar': false
},action)=>{
    switch (action.type) {
        case 'modal-visible':
            return {
                ...state,
                'modal':true
            };

        case 'modal-invisible':
            return {
                ...state,
                'modal':false
            };
        case 'sidebar-visible':
            return {
                ...state,
                'sidebar':true
            };
        case 'sidebar-invisible':
            return {
                ...state,
                'sidebar':false
            };

        
            
        default:
            return state;
    }
}