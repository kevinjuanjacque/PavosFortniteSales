import React from 'react';

export const FormUser = () => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <div className="form-group row">
                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input required type="email" className="form-control" id="Email" placeholder="example@email.com"/>
                </div>
                
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                <div className="col-sm-10">
                    <input required type="password" className="form-control" id="password" placeholder="**********"/>
                </div>
            </div>
            <button type="submit" className="btn btn-light btn-block" > ENTRAR </button>            
        </form>
    )
}
