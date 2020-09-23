import React from 'react';
import '../Styles/appbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark ">
                <div className="container">
                    <p className="navbar-brand">Navbar</p>
                </div>
                
                <button className="btn btn-light">Iniciar sesión</button>
            </nav>
            <div className="separador" />
            <div className="sizedSubNav sticky-top">
                <div className="container row row-cols-8 text-white mx-auto">
                    <div className="col mt-2 mb-2 ">
                        PlayStation
                    </div>
                    <div className="col mt-2 mb-2">
                        Xbox one
                    </div>
                    <div className="col mt-2 mb-2">
                        nintendo
                    </div>
                    <div className="col mt-2 mb-2">
                        steam
                    </div>
                    <div className="col mt-2 mb-2">
                        google
                    </div>
                    <div className="col mt-2 mb-2">
                        itun
                    </div>
                    <div className="col mt-2 mb-2">
                        riot
                    </div>
                    <div className="col mt-2 mb-2">
                        fornai
                    </div>

                </div>

            </div>
        </>
    )
}
