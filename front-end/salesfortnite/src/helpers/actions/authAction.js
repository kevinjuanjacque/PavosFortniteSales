export const startGoogleLogin = (name, email) => {
    return {
        type:"auth-login",
        body:{
            name,
            email
        }
    }
}