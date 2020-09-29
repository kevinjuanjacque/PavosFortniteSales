export const startGoogleLogin = (name, email) => {
    return {
        type:"auth-login",
        body:{
            name,
            email
        }
    }
}

export const logOut = () => {
    return {
        type:"auth-logout"
    }
}