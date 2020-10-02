import React, { useState } from 'react'
import { Filtros } from './Ventas/filtros'
import { VentasScreen } from './Ventas/VentasScreen'

export const Ventas = () => {
    const [Filtro, setFiltro] = useState(
        {
            filtro:"Fecha",
        }
    )
    return (
        <div className="fondo">
            <h3 className="ml-2 "> VENTAS </h3>
            <div className="separador"/>
            <Filtros Filtro={Filtro} setFiltro={setFiltro} />
            <VentasScreen Filtro={Filtro}/>
        </div>
    )
}
