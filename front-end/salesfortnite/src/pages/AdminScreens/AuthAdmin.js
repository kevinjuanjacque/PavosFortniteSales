import React from 'react';
import '../../Styles/auth.css';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

export const AuthAdmin = () => {
    const responseGoogle = ({profileObj}) => {
        console.log(profileObj);
      }
    return (
        <>
            
            <div className="container ">
            <div className="row mt-5   ">
                <div className="col colorDif shadow">
                    <div class="">
                         <h1>Aca </h1>
                    </div>
                </div>
                <div className="col bordesTRBR colorSal shadow">
                    
                    
                        <form className="form-signin " onSubmit={(e)=>{
                            e.preventDefault();
                        }}>       
                        <h2 className="form-signin-heading">Please login</h2>
                        <input required type="email" className="form-control" name="username" placeholder="Email Address"  />
                        <input required type="password" className="form-control" name="password" placeholder="Password" />      
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                        </label>
                        <button className="btn btn-lg colorBtn btn-block btn-dark" type="submit">Entrar Administracion</button>   
                        </form>
                        <Link to="/Administracion/Home/Ventas"> {"->"} </Link>
                        <hr />
                        <div className="form-signin ">
                                <GoogleLogin
                                clientId="841254428842-4kti4fmap164cpdfk9026tvsm2984gep.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                className="btn-block"
                            />
                        </div>
                </div>
                
            </div>
            </div>

        </>
    )
}
