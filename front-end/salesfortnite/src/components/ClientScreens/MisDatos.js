import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChangePass } from '../../helpers/function/changePass';
import {ClientBar} from './ClientBar'; 
import {ModalChanges} from './ModalChanges'

export const MisDatos = () => {

    const auth = useSelector(state => state.auth);
    const initPass={
        contrasenaActual:'',
        contrasenaNew:'',
        contrasenaNewRepet:''
    }

    const [changePasss,setchangePasss]=useState(initPass)

    const chageInput=(e)=>{
        setchangePasss({
            ...changePasss,
            [e.target.id]:e.target.value
        })
    }

    return (   
        <div align="center" className="AlinearTextoIzq">
            <div className="container mt-1 row row-cols-10" >
                <div className="col-2">
                    <ClientBar/>  
                </div>
            <div className="col-9">
            <div class="card border-dark mb-3">
                <div class="card-header" align="left">Información de la cuenta</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group" align="left">
                                <label for="FormNombre" >Nombre</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder={auth.name}/>
                            </div>
                            <div class="form-group" align="left">
                                <label for="FormCorreo">Correo electrónico</label>
                                <input class="form-control" type="text" placeholder={auth.email} readonly/>
                            </div>
                            <div className="container">
                            <div class="card border-dark mb-3" >
                                    
                                <div class="card-body" align="left">
                                    <h5 class="card-title">Cambio de contraseña</h5>
                                    <div class="form-group">
                                        <label htmlFor="FormPass">Contraseña actual</label>
                                        <input type="password" class="form-control" id="contrasenaActual"  onChange={(e)=>chageInput(e)}  value={changePasss.contrasenaActual} placeholder=""/>
                                    </div>
                                    <div class="form-group">
                                        <label for="FormPass">Nueva contraseña</label>
                                        <input type="password" class="form-control" id="contrasenaNew" onChange={(e)=>chageInput(e)} value={changePasss.contrasenaNew} placeholder=""/>
                                    </div>
                                    <div class="form-group">
                                        <label for="FormPass">Repita la nueva contraseña</label>
                                        <input type="password" className={(changePasss.contrasenaNew!==changePasss.contrasenaNewRepet) ? "form-control is-invalid" : "form-control" } id="contrasenaNewRepet" onChange={(e)=>chageInput(e)} value={changePasss.contrasenaNewRepet} placeholder=""/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                                
                        
                    </form>
                    <button className="btn botonSecundario" onClick={()=>setchangePasss(initPass)}>Descartar los cambios</button>  
                    &nbsp; 
                    <button className="btn boton" 
                        onClick={()=>{
                            if(changePasss.contrasenaNew!==changePasss.contrasenaNewRepet){
                                window.alert('las contraseñas deben ser iguales');
                                return ;
                            }
                            ChangePass(changePasss.contrasenaActual,changePasss.contrasenaNew).then((res)=>{
                                window.alert(res);
                            }).catch((err)=>window.alert(err));
                        }}
                    >Confirmar cambios</button>
                </div>
            </div>
            <ModalChanges/>
            </div>
        </div>
        
        
        </div>
    )
}
