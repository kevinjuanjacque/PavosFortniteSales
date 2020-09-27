import React from 'react';
import 'animate.css';
import '../Styles/login.css';
import { FormUser } from '../components/login/FormUser';
import { GoogleLogin } from 'react-google-login';

export const LoginScreen = () => {

    const responseGoogle = ({profileObj}) => {
        console.log(profileObj);
      }

    return (
        <div className="animate__animated animate__backInRight ">
            <div className="container">

            <div className="card mb-3 mt-2">
                <img src="https://cdn.onlinewebfonts.com/svg/img_411076.png" id="logoPerfil" className="card-img-top mt-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iniciar Sesion</h5>
                    <FormUser />
                    
                    <GoogleLogin
                        clientId="841254428842-4kti4fmap164cpdfk9026tvsm2984gep.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        isSignedIn={true}
                        className="form-signin "
                    />
                </div>

                <div className="container">
                
                </div>
            </div>

            </div>
        </div>
    )
}
