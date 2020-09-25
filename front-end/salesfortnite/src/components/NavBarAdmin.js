import React from 'react';
import { Link } from 'react-router-dom';
import icono from  '../assets/icons/AdminIcon.png';
import '../Styles/appbar.css';

export const NavBarAdmin = () => {
    return (
        <>
        <div className=" colorDegradientLinear border-bottom-0">

                
            <div className="container " >
                <div className="row row-cols-3 ">
                    <div className="col mt-2 mb-4">
                        <Link to="/Administracion/Home/Ventas" className="text-white" >Navbar</Link>
                    </div>
                    <div className="col ">
                        <img  src={icono} height="50" alt="imagen logo admin"/>
                    </div>
                </div>
                


            </div>
            </div>
            
                
        
       
        </>
    )
}
