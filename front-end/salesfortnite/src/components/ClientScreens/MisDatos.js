import React from 'react';
import { useSelector } from 'react-redux';
import {ClientBar} from './ClientBar'; 
import {ModalChanges} from './ModalChanges'

export const MisDatos = () => {

    const auth = useSelector(state => state.auth);

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
                                        <label for="FormPass">Contraseña actual</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                                    </div>
                                    <div class="form-group">
                                        <label for="FormPass">Nueva contraseña</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                                    </div>
                                    <div class="form-group">
                                        <label for="FormPass">Repita la nueva contraseña</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                                
                        
                    </form>
                    <button className="btn botonSecundario">Descartar los cambios</button>  
                    &nbsp; 
                    <button className="btn boton" data-toggle="modal" data-target="#ventanaModal">Confirmar cambios</button>
                </div>
            </div>
            <ModalChanges/>
            </div>
        </div>
        
        
        </div>
    )
}
