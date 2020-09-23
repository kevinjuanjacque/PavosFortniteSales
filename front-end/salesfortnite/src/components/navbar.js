import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/appbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar colorDegradientLinear navbar-expand-lg navbar-dark ">
                <div className="container">
                    <Link to="/" className="navbar-brand" >Navbar</Link>
                </div>
                
                <Link to="/Login" className="btn btn-light">Iniciar</Link>
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
