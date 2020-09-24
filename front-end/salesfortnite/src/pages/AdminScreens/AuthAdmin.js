import React from 'react';
import '../../Styles/auth.css';

export const AuthAdmin = () => {
    return (
        <>
            
            <div class="wrapper">
                <form class="form-signin" onSubmit={(e)=>{
                    e.preventDefault();
                }}>       
                <h2 class="form-signin-heading">Please login</h2>
                <input required type="text" class="form-control" name="username" placeholder="Email Address"  />
                <input required type="password" class="form-control" name="password" placeholder="Password" />      
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar Administracion</button>   
                </form>
            </div> 

        </>
    )
}
