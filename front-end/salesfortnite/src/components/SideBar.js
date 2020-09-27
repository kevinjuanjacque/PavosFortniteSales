import React, { useState } from 'react';
import '../Styles/sideBar.css'
import { BsArrowReturnRight,BsFillPeopleFill } from "react-icons/bs";
import { AuthLogin } from './login/AuthLogin';
import { AuthRegister } from './login/AuthRegister';

export const SideBar = () => {

    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [Login, setLogin] = useState(true)
    
    return (
        <>
            
            <button onClick={showSidebar} className="btn btn-light"> <BsFillPeopleFill /> </button>
            <nav className={sidebar ? 'nav-menu active animate__animated animate__fadeInRight overflow-auto' : 'nav-menu animate__animated animate__fadeOutRight'}>
                <div className=" centrado mt-3">
                    <BsArrowReturnRight size="50" color="white" onClick={showSidebar} cursor="pointer"/>
                </div>

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

                

            </nav>
        </>
    )
}
