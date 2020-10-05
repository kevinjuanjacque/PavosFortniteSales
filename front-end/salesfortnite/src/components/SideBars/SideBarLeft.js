import React from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/sideBar.css';

import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export const SideBarLeft = () => {
    // const dispatch = useDispatch();
    const ui = useSelector(state => state.ui)

    // const showSidebarLeft = () =>{
    //     dispatch(abrirSideLeft());
    // }

    // const closeSidebarLeft = () =>{
    //     dispatch(cerrarSideLeft());
    // }

    return (

            <>
                
                {/* <button onClick={showSidebarLeft} className="btn btn-light mt-5"> boton </button> */}
                
                <nav className={ui.sidebarleft ? 'nav-menu-left active animate__animated animate__fadeInRight overflow-auto' : 'nav-menu-left animate__animated animate__fadeOutRight'}>
                    <div className=" mt-5">
                        {/* <BsReverseBackspaceReverse size="50" color="white" onClick={closeSidebarLeft} cursor="pointer"/> */}
                    </div>
                    
                    <h4 className="text-secondary">Filtros</h4>

               
          
                <ul className="list-group list-group-flush mt-2 m-2">
                        <div className="list-group-item list-group-item-secondary list-group-item-action text-muted ">
                            <Link className="text-secondary" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ordenar por <IoIosArrowForward/>
                            </Link>
                            <div className="dropdown-menu" id="dropdownCategorias" aria-labelledby="dropdownMenuButton" onMouseLeave={()=>{
                                document.getElementById("dropdownCategorias").click();}}>
                                <Link className="dropdown-item" to="/Playstation"> Precio: menor a mayor </Link>
                                <Link className="dropdown-item" to="/Playstation"> Precio: Mayor a menor </Link>
                                <Link className="dropdown-item" to="/Playstation"> Destacados </Link>
                                <Link  className="dropdown-item" to="/Playstation"> Más vendidos </Link>
                                <Link  className="dropdown-item" to="/Playstation"> Nombre: A-Z </Link>
                                <Link  className="dropdown-item" to="/Playstation"> Nombre: Z-A </Link>
                            </div>
                        </div>    
                        <Link to="/Categoria/Playstation" className="list-group-item list-group-item-secondary list-group-item-action text-secondary"> Gift Cards</Link>
                        <Link to="/Categoria/Playstation" className="list-group-item list-group-item-secondary list-group-item-action text-secondary">Playstation Plus</Link>
                        <Link to="/Categoria/Playstation" className="list-group-item list-group-item-secondary list-group-item-action text-secondary">Complementos</Link>
   
                                    
                    </ul>  
                </nav>
            </>
        
    )
}
