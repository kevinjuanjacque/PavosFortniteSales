import React, { useState } from 'react';
import { AuthLogin } from './AuthLogin';
import { AuthRegister } from './AuthRegister';
import {BsFillPeopleFill } from "react-icons/bs";

export const AuthComponent = () => {
    
    const [Login, setLogin] = useState(true)
    return (
        <div className="container">
                    {
                        Login ? 
                        (
                            <>
                            <AuthLogin /> 
                            <div className="centrado-Text text-white">
                                <small> ¿No tiene una cuenta? </small>
                                <button type="button" 
                                className="btn btn-link btn-sm "
                                onClick={()=>{
                                    setLogin(!Login)
                                }}
                                    >Cree una</button>
                            </div>
                            </>
                        )
                        : 
                        (<>
                            <div className="centrado-Text text-white">
                                <button type="button" 
                                className="btn btn-link btn-sm "
                                onClick={()=>{
                                    setLogin(!Login)
                                }}
                                    > <BsFillPeopleFill /> Iniciar Sesion</button>
                            </div>
                            <AuthRegister />
                        </>)
                    }
                    

                </div>

    )
}
