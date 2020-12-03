import React from 'react'
import { AddVisit } from '../helpers/function/AddVisit';
export const Nosotros = () => {
    AddVisit(window.location.pathname);
    return (
        <div align="center">
            <div className="container mt-3 row row-cols-10">
             <div className="col-6" align="justify">
             <h1>Nosotros</h1>
                <blockquote class="blockquote">
                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <footer class="blockquote-footer">PavosFortniteCL <cite title="Source Title"></cite></footer>
                </blockquote>
                 
             </div>
            <div className="col-4">
                <img src="../assets/QuienesSomos.jpg" class="float-left" height="400px" alt="imagen"/>
            </div>

            </div>
        </div>

    )
}
