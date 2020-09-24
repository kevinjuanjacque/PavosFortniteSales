import React from 'react'
import  '../Styles/home.css'
import  { CarouselFotos } from '../components/home/carousel.js'
import { ProductosDestacados } from '../components/home/productos-destacados.js'
import  { NuevosProductos } from '../components/home/nuevos-productos.js'

export const Home = () => {
    return (
        
        <>
            <CarouselFotos/>
            <ProductosDestacados/>
            <NuevosProductos/>

        </>
    )
}
