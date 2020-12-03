import React from 'react';

import { TodoCompras } from  '../components/ClientScreens/TodoCompras'
import { AddVisit } from '../helpers/function/AddVisit';

export const ClientScreen = () => {
    AddVisit(window.location.pathname);
    return (
        <div>
            <TodoCompras />
        </div>
    )
}