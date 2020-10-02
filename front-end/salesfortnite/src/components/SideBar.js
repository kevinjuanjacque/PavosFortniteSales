import React, { useState } from 'react';
import '../Styles/sideBar.css'
import { BsReverseBackspaceReverse,BsPeopleCircle } from "react-icons/bs";


export const SideBar = ({ Component, Name='' }) => {

    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    
    
    return (
        <>
            
            <button onClick={showSidebar} className="btn btn-light"> <BsPeopleCircle /> {Name} </button>
            <nav className={sidebar ? 'nav-menu active animate__animated animate__fadeInRight overflow-auto' : 'nav-menu animate__animated animate__fadeOutRight'}>
                <div className=" ml-5 mt-3">
                    <BsReverseBackspaceReverse size="50" color="white" onClick={showSidebar} cursor="pointer"/>
                </div>

               
                <Component />

            </nav>
        </>
    )
}
