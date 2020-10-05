import React from 'react'

export const ModalChanges = () => {
    return (
        <div className="modal" id="ventanaModal" tabindex="-1" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 id="tituloVentana">Actualización de información personal</h5>
                    <button className="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-boy">
                    <div className="alert alert-success">
                        <h6><strong>Tus datos se han guardado exitosamente</strong> </h6>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">
                        Cerrar
                    </button>
                    <button className="btn btn-primary" type="button">
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div> 
    )
}