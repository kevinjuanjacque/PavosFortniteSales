import React from 'react';
import {
    useParams
} from "react-router-dom";
import { ProductoPsn } from '../components/Products/ProductoPsn';

export const Category = () => {
    const { categoria }=useParams();
    return (
        <>
            {categoria}
            
            <ProductoPsn />
        </>
    )
}
