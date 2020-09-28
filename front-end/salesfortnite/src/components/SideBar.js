import React, { useState } from 'react';
import '../Styles/sideBar.css'
import { BsArrowReturnRight,BsFillPeopleFill } from "react-icons/bs";


export const SideBar = ({ Component, Name='' }) => {

    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    
    
    return (
        <>
            
            <button onClick={showSidebar} className="btn btn-light"> <BsFillPeopleFill /> {Name} </button>
            <nav className={sidebar ? 'nav-menu active animate__animated animate__fadeInRight overflow-auto' : 'nav-menu animate__animated animate__fadeOutRight'}>
                <div className=" centrado mt-3">
                    <BsArrowReturnRight size="50" color="white" onClick={showSidebar} cursor="pointer"/>
                </div>

               
                <Component />

            </nav>
        </>
    )
}
