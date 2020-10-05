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
    'sidebar': false,
    'sidebarleft':true
    
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

        case 'sidebarleft-visible':
            return {
                ...state,
                'sidebarleft':true
            };
        case 'sidebarleft-invisible':
            return {
                ...state,
                'sidebarleft':false
            };
            
        default:
            return state;
    }
}