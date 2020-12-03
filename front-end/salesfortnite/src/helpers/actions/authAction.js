import { Login } from "../function/login"

export const startGoogleLogin = (name, email) => {
    return {
        type:"auth-login",
        body:{
            name,
            email
        }
    }
}

export const loginNormal = async(email,password,dispatch) =>{

    const resp = await Login(email,password);

    
    if(!resp.token){
        window.alert('Error en la autenticacion')
        return {};
    }
    
    localStorage.setItem('token',resp.token);

    return dispatch({
        type:"auth-login",
        body:{
            name:resp.name,
            email
        }
    });
    
}

export const ReLogin = (email,name)=>{
    return {
        type:"auth-login",
        body:{
            name,
            email
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('token');
    return {
        type:"auth-logout"
    }
}