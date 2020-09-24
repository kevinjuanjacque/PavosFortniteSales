import React from 'react'
import  '../Styles/home.css'
export const Home = () => {
    return (
        
        <>
        <div id="carousel1" className="container carousel slide animate__animated animate__backInLeft mt-2" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                <li data-target="#carousel1" data-slide-to="1"></li>
                <li data-target="#carousel1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active img-fluid">
                    <img src="../assets/fondo_ps4.jpg"  className="d-block w-200" alt="imagen" />
                </div>
                <div className="carousel-item">
                    <img src="../assets/steam_card.png" className="d-block w-200" alt="imagen" />
                </div>
                <div className="carousel-item">
                    <img src="../assets/xbox_card.jpg" className="d-block w-200" alt="imagen" />
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
        
        <div class="container">
            <br></br>
            <h5>PRODUCTOS DESTACADOS</h5>
            <div className="separador" />
            <br></br>
            <div class="row row-cols" align="center">
                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD</p> 
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD2</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD3</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD4</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD5</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD3</p>
                </div>
            </div>
        </div>
        <div class="container">
            <br></br>
            <h5>NUEVOS PRODUCTOS</h5>
            <div className="separador" />
            <br></br>
            <div class="row row-cols" align="center">
                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD4</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD5</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD3</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD4</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD5</p>
                </div>

                <div class="col">
                    <img src="../assets/psn_gift_card.jpeg" alt="imagen" height = "200"/>
                    <p>$10 PSN GIFT CARD5</p>
                </div>  
            </div>
           

        </div>

        </>
    )
}
