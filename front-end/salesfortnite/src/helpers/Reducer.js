


export const todoApp = (state={},action)=>{
    switch (action.type) {
        case "auth-login":
            return action.body;

        case "auth-logout":
            return {};

        

        

        default:
            return state;
    }
}