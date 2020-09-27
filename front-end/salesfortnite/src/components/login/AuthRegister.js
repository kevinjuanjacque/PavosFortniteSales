import React from 'react';
import {BsPerson} from "react-icons/bs";

export const AuthRegister = () => {
    return (
        <>

                    <div class="wrapper  animate__animated animate__fadeIn">
                        <form class="form-signin" onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                            
                        <h4 class="form-signin-heading"><BsPerson size="40"  /> Registrar</h4>
                        <p class="mb-0">Name</p>
                        <hr />
                        <input required type="Text" class="form-control mb-3" name="username" placeholder="Su nombre"  />
                        <hr />
                        <p class="mb-0">Email</p>
                        <hr />
                        <input required type="email" class="form-control mb-3" name="email" placeholder="Email Address"  />
                        <hr />
                        <p class="mb-0">Password</p>
                        <hr />
                        <input required type="password" class="form-control" name="password" placeholder="Password" />     

                        <input required type="password" class="form-control" name="Repeat-password" placeholder="Repeat-Password" />      
                        
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Registrarme </button>   
                        </form>
                    </div> 
            
        </>
    )
}
