import React from 'react';
import '../../../Styles/AdminVentas.css'

export const Filtros = ( {Filtro, setFiltro}) => {
    const selectFiltro=(e)=>{
        console.log(e.target.value);
        setFiltro({'filtro':e.target.value});
    }
    const selectSubFiltro=(e)=>{
        setFiltro({
            ...Filtro,
            'subFiltro':e.target.value
        });

    }
    const selectTIPO=(e)=>{
        setFiltro({
            ...Filtro,
            'tipo':e.target.value
        });

    }
    return (
        <div className="container">
            <form className="form-inline ">
            <div className="form-inline">
                <label >Filtro </label>
                <select className="ml-2 custom-select" defaultValue={'Fecha'} id="FILTRO" onChange={(e)=>{selectFiltro(e)}}>
                    <option value="Fecha" >Por Fecha</option>
                    <option value="Categoria">Por Categoria</option>
                    <option value="Producto">Por Productos</option>
                </select>
            </div>
            {
                (Filtro.filtro==="Fecha") && (
                <div className="ml-2 form-inline">
                    <label >Periodo </label>
                    <select className=" ml-2 custom-select" id="FECHA" defaultValue={'DEFAULT'} onChange={(e)=>{selectSubFiltro(e)}}   >
                    <option value="DEFAULT" disabled>Elegir una...</option>
                        <option value="Dia">Diario</option>
                        <option value="Mes">Mensual</option>
                        <option value="Ano">Anual</option>
                    </select>
                </div>)
            }
            {
                (Filtro.filtro==="Categoria") && (
                <div className="ml-2 form-inline">
                    <label >Categoria </label>
                    <select className="ml-2 custom-select" id="CAT" defaultValue={'DEFAULT'} onChange={(e)=>{selectSubFiltro(e)}}>
                    <option value="DEFAULT" disabled>Elegir una...</option>
                        <option value="Psn">Playstation</option>
                        <option value="Fortnite">Fortnite</option>
                        <option value="etc">...</option>
                    </select>
                </div>)
            }
            {
                (Filtro.filtro==="Producto") && (
                <div className="ml-2 form-inline">
                    <label >Producto </label>
                    <select className="ml-2 custom-select" id="PRODUCTO" defaultValue={'DEFAULT'} onChange={(e)=>{selectSubFiltro(e)}}>
                        <option value="DEFAULT" disabled>Elegir una...</option>
                        <option value="10US">10US Playstation</option>
                        <option value="1 PLUS">1 MES PLUS</option>
                        <option value="etc">...</option>
                    </select>
                </div>)
            }
            <div className="derecha form-inline">
                <label >Modo </label>
                <select className="ml-2 custom-select" defaultValue={'DEFAULT'} id="Tipo" onChange={(e)=>{selectTIPO(e)}}>
                    <option value="DEFAULT" disabled>Elegir una...</option>
                    <option value="Tabla" >Tabla</option>
                    <option value="Grafico">Grafico</option>
                </select>
            </div>
            </form>
        </div>
    )
}
