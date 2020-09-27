import React from 'react';
import {BsPerson} from "react-icons/bs";

export const AuthRegister = () => {
    return (
        <>

                    <div className="wrapper  animate__animated animate__fadeIn">
                        <form className="form-signin" onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                            
                        <h4 className="form-signin-heading"><BsPerson size="40"  /> Registrar</h4>
                        <p className="mb-0">Name</p>
                        <hr />
                        <input required type="Text" className="form-control mb-3" name="username" placeholder="Su nombre"  />
                        <hr />
                        <p className="mb-0">Email</p>
                        <hr />
                        <input required type="email" className="form-control mb-3" name="email" placeholder="Email Address"  />
                        <hr />
                        <p className="mb-0">Password</p>
                        <hr />
                        <input required type="password" className="form-control" name="password" placeholder="Password" />     

                        <input required type="password" className="form-control" name="Repeat-password" placeholder="Repeat-Password" />      
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarme </button>   
                        </form>
                    </div> 
            
        </>
    )
}
