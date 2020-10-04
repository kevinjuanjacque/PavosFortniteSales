import React  from 'react';
import '../Styles/sideBar.css'
import { BsReverseBackspaceReverse,BsPeopleCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { abrirSide, cerrarSide } from '../helpers/actions/uiActions';


export const SideBar = ({ Component, Name='' }) => {

    
    const dispatch = useDispatch();

    const showSidebar = ()=>{
        dispatch(abrirSide());
    };
    const closeSidebar=()=>{
        dispatch(cerrarSide());
    };
    const ui = useSelector(state => state.ui)

    
    
    return (
        <>
            
            <button onClick={showSidebar} className="btn btn-light"> <BsPeopleCircle /> {Name} </button>
            <nav className={ui.sidebar ? 'nav-menu active animate__animated animate__fadeInRight overflow-auto' : 'nav-menu animate__animated animate__fadeOutRight'}>
                <div className=" ml-5 mt-3">
                    <BsReverseBackspaceReverse size="50" color="white" onClick={closeSidebar} cursor="pointer"/>
                </div>

               
                <Component />

            </nav>
        </>
    )
}
