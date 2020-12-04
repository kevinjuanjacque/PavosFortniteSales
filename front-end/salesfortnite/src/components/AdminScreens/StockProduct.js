import React from 'react';
import { StockProduc } from '../../helpers/function/GetStock';
import '../../Styles/StockStyle.css';
export const StockProduct = () => {

    const stock = StockProduc();
    console.log(stock.data.length);

    return (
        <div className="container mt-2">
            <h1> Stock de productos </h1>
            
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!stock.loading) && (
                            stock.data.map(p=>{
                                var estado=""
                                    if(p.stock>=10){
                                        estado="superavit"
                                    }
                                    else{
                                        if(p.stock<10 && p.stock>4){
                                            estado="normal"
                                        }
                                        else{
                                            estado="critico"
                                        }
                                    }
                                return(<tr>
                                            <td>
            
                                                <div className="row" >
                                                    <div className={estado+" mr-2 ml-2"} >
            
                                                    </div>
                                            {estado}
                                        </div>
                                            </td>
                                            <td>{p.nombre_producto}</td>
                                            <td>{p.stock}</td>
                                        </tr>)
                            })
                        )
                    }
                    
                    
                </tbody>
            </table>
        </div>
    )
}
