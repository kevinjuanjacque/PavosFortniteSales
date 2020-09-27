import React from 'react';
import '../../Styles/auth.css';

import { GoogleLogin } from 'react-google-login';

import {BsPerson} from "react-icons/bs";

export const AuthLogin = () => {
    const responseGoogle = ({profileObj}) => {
        console.log(profileObj);
      }
    return (
        <>
            
            
                    <div class="wrapper animate__animated animate__fadeIn">
                        <form class="form-signin" onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                            
                        <h2 class="form-signin-heading"><BsPerson size="40"  /> Iniciar</h2>
                        <input required type="email" class="form-control" name="username" placeholder="Email Address"  />
                        <input required type="password" class="form-control" name="password" placeholder="Password" />      
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                        </label>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar </button>   
                        </form>
                        <hr />
                        <GoogleLogin
                            clientId="841254428842-4kti4fmap164cpdfk9026tvsm2984gep.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            isSignedIn={true}
                            className="mr-5 ml-5"
                        
                        />
                    </div> 
                

        </>
    )
}
