import React from 'react';
import  '../Styles/home.css';
import  { CarouselFotos } from '../components/home/carousel.js';
import { ProductosDestacados } from '../components/home/productos-destacados.js';

export const Home = () => {
    return (
        
        <>
            
            <div >

                <CarouselFotos/>
                <ProductosDestacados/>
            </div>

            
        </>
    )
}
