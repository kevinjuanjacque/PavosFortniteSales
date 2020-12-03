import React from 'react'
import { MisDatos } from  '../components/ClientScreens/MisDatos'
import { AddVisit } from '../helpers/function/AddVisit';

export const MiPerfil = () => {
    AddVisit(window.location.pathname);
    return (
        <div>
            <MisDatos />
        </div>
    )
}