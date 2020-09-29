import React from 'react';
import  '../Styles/home.css';
import  { CarouselFotos } from '../components/home/carousel.js';
import { ProductosDestacados } from '../components/home/productos-destacados.js';
import  { NuevosProductos } from '../components/home/nuevos-productos.js';
import { ShoppingCart } from '../components/ShoppingCart';

export const Home = () => {
    return (
        
        <>
            <ShoppingCart  />
            <CarouselFotos/>
            <ProductosDestacados/>
            <NuevosProductos/>

            
        </>
    )
}
