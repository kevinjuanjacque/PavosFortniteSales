import React from 'react';
import {useParams} from "react-router-dom";
import { InProductoPsn } from '../components/Products/InProductoPsn';
import '../Styles/filtros.css';


export const Category = () => {
    const { categoria }=useParams();
    console.log(categoria)

    return (
        <>

            <div className="container">
                <br/>
                <div className="row row-cols-xl-6">
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                    <InProductoPsn />
                </div>
                
                <nav aria-label="...">
                    <br/>
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">Anterior</span>
                        </li>
                        <li class="page-item active"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item"><a class="page-link" href="/">Siguiente</a></li>
                    </ul>
                </nav>   
            </div>
        </>
    )
}
