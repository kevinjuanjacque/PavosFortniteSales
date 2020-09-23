import React from 'react'
import  '../Styles/home.css'
export const Home = () => {
    return (
        
        
        <div id="carousel1" className="container carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                <li data-target="#carousel1" data-slide-to="1"></li>
                <li data-target="#carousel1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active img-fluid">
                    <img src="../assets/fondo_ps4.jpg"  className="d-block w-100" alt="imagen"  />
                </div>
                <div className="carousel-item">
                    <img src="../assets/steam_card.png" className="d-block w-100" alt="imagen"/>
                </div>
                <div className="carousel-item">
                    <img src="../assets/xbox_card.jpg" className="d-block w-100" alt="imagen"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
