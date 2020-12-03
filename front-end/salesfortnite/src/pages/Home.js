import React from 'react';
import  '../Styles/home.css';
import  { CarouselFotos } from '../components/home/carousel.js';
import { ProductosDestacados } from '../components/home/productos-destacados.js';
import { AddVisit } from '../helpers/function/AddVisit';

export const Home = () => {
    
    AddVisit(window.location.pathname);
    
    return (
        
        <>
            
            <div >

                <CarouselFotos/>
                <ProductosDestacados/>
            </div>

            
        </>
    )
}
