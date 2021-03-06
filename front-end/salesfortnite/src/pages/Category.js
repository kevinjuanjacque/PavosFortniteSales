import React from 'react';
import {useParams} from "react-router-dom";
import { InProductoPsn } from '../components/Products/InProductoPsn';
import { AddVisit } from '../helpers/function/AddVisit';
import { GetProduct } from '../helpers/function/GetProduct';
import '../Styles/filtros.css';


export const Category = () => {
    const { categoria }=useParams();
    const data = GetProduct(categoria);

    AddVisit(window.location.pathname);

    return (
        <>

            <div className="container">
                <br/>
                <div className="row row-cols-xl-6">
                    {
                        (data.loading) ? <h1>CARGANDO DATA ... </h1> :
                        (
        
                            data.data.map(p=>{
                                let urlImage = 'https://i.ibb.co/nrbjd8v/notfound.png';
                                
                                switch (categoria) {
                                    case 'Playstation':
                                        urlImage='../assets/psn_gift_card.jpeg'
                                        break;
                                    case 'Xbox':
                                        urlImage='../assets/xbox_gift_card.png'
                                        break;
                                    case 'Nintendo':
                                        urlImage='../assets/nintendo_gift_card.png'
                                        break;
                                    case 'Steam':
                                        urlImage='../assets/steam_gift_card.jpeg'
                                        break; 
                                    case 'Google':
                                        urlImage='../assets/google_gift_card.jpeg'
                                        break;
                                    case 'Apple':
                                        urlImage='https://i.ibb.co/nrbjd8v/notfound.png'
                                        break;
                                    case 'Riot':
                                        urlImage='https://i.ibb.co/nrbjd8v/notfound.png'
                                        break;
                                    case 'Fortnite':
                                        urlImage='https://i.ibb.co/nrbjd8v/notfound.png'
                                        break;                                     
                                    default:
                                        break;
                                }
                                return (<InProductoPsn key={p.id_producto} url={urlImage} id={p.id_producto} nombre_producto={p.nombre_producto} precio_unitario={p.precio_unitario} />)
                            })
                        )
                    }
                </div>
                
                
            </div>
        </>
    )
}
