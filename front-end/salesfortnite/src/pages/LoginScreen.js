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

            <div className="card mb-3 mt-2 colorBack text-white shadow">
                <img src="https://cdn.onlinewebfonts.com/svg/img_411076.png" id="logoPerfil" className="card-img-top mt-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iniciar Sesion</h5>
                    <FormUser />
                    
                </div>
                <div className="separador"></div>

                    <div className="container mt-1">
                        <h5>Registrate con Google</h5>
                    </div>
                
                    <GoogleLogin
                        clientId="841254428842-4kti4fmap164cpdfk9026tvsm2984gep.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        className="m-2"
                    />


                
                
            </div>

            </div>
        </div>
    )
}
