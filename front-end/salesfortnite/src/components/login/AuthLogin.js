import React from 'react';
import '../../Styles/auth.css';

import { GoogleLogin } from 'react-google-login';

import {BsPerson} from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { loginNormal, startGoogleLogin } from '../../helpers/actions/authAction';
import { cerrarSide } from '../../helpers/actions/uiActions';

export const AuthLogin = () => {
    const dispatch = useDispatch();
    const responseGoogle =  ({profileObj}) => {
        dispatch(startGoogleLogin(profileObj.name, profileObj.email));
        dispatch(cerrarSide());
      }
    return (
        <>
            
            
                    <div className="wrapper animate__animated animate__fadeIn">
                        <form className="form-signin" onSubmit={(e)=>{
                            e.preventDefault();
                            
                            loginNormal(document.getElementById("email").value,document.getElementById("password").value,dispatch);
                            dispatch(cerrarSide());
                        }}>
                            
                        <h2 className="form-signin-heading"><BsPerson size="40"  /> Iniciar</h2>
                        <input required id="email" type="email" className="form-control" name="username" placeholder="Email Address"  />
                        <input required id="password" type="password" className="form-control" name="password" placeholder="Password" />      
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                        </label>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar </button>   
                        </form>
                        <hr />
                        <GoogleLogin
                            clientId="841254428842-4kti4fmap164cpdfk9026tvsm2984gep.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            isSignedIn={false}
                            className="mr-5 ml-5"
                        
                        />
                    </div> 
                

        </>
    )
}
