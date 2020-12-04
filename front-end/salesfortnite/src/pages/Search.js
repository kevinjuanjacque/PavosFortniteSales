import React from 'react'
import { useParams } from 'react-router-dom';
import { InProductoPsn } from '../components/Products/InProductoPsn';
import { CargarSearch } from '../helpers/function/CargarProductos'

export const Search = () => {
    const {palabra} = useParams();
    const data =CargarSearch(palabra);
    console.log(data.data)
    return (
        <div>
            {
                        (data.loading) ? <h1>CARGANDO DATA ... </h1> :
                        (
        
                            data.data.map(p=>{
                                let urlImage = 'https://i.ibb.co/nrbjd8v/notfound.png';
                                
                                switch (p.id_categoria) {
                                    case 1:
                                        urlImage='../assets/psn_gift_card.jpeg'
                                        break;
                                    case 2:
                                        urlImage='../assets/xbox_gift_card.png'
                                        break;
                                    case 3:
                                        urlImage='../assets/nintendo_gift_card.png'
                                        break;
                                    case 4:
                                        urlImage='../assets/steam_gift_card.jpeg'
                                        break; 
                                    case 5:
                                        urlImage='../assets/google_gift_card.jpeg'
                                        break;
                                    case 6:
                                        urlImage='https://i.ibb.co/nrbjd8v/notfound.png'
                                        break;
                                    case 7:
                                        urlImage='https://i.ibb.co/nrbjd8v/notfound.png'
                                        break;
                                    case 8:
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
    )
}
