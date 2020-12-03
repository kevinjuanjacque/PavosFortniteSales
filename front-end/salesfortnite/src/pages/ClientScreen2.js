import React from 'react'

import { MisCompras } from  '../components/ClientScreens/MisCompras'
import { AddVisit } from '../helpers/function/AddVisit';
export const ClientScreen2 = () => {
    AddVisit(window.location.pathname);
    return (
        <div>
            <MisCompras />
        </div>
    )
}