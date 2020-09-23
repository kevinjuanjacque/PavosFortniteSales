import React from 'react';
import 'animate.css';
import '../Styles/login.css';
import { FormUser } from '../components/login/FormUser';

export const LoginScreen = () => {
    return (
        <div className="animate__animated animate__backInRight ">
            <div className="container">

            <div className="card mb-3 mt-2">
                <img src="https://cdn.onlinewebfonts.com/svg/img_411076.png" className="card-img-top mt-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iniciar Sesion</h5>
                    <FormUser />

                    
                </div>
            </div>

            </div>
        </div>
    )
}
