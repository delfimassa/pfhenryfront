import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import s from './Favoritos.module.css';

import { getPeluquerias } from '../Redux/actions/peluqueria'; // ESTO ES SOLO PARA PROBAR
import { getUserMongo } from '../Redux/actions/client';
import { getFavorites } from '../Redux/actions/favorite';


const Favoritos = () => { 
    
    const currentMongo = useSelector((state) => state.userMongo)
    const currentFirebase = useSelector((state) => state.user)
    const filteredPeluquerias = useSelector((state) => state.peluqueriasFav)
    
    // console.log('mongo', currentMongo.length== 0 ? 'cargando' : 'cargó') //NO BORRAR PORQUE NO ANDA (WTF)
    // console.log('firebase', currentFirebase);

    const dispatch = useDispatch();
    


    useEffect(() => {
        // dispatch(getFavorites(currentMongo.username))
        if(currentFirebase.email){
            dispatch(getUserMongo(currentFirebase.email))
        }
        if(currentMongo.username){
            dispatch(getFavorites(currentMongo))
        } 
    }, []);

    let sacarLosMilYUnArrays = filteredPeluquerias.map(e => {
        let hola = e[0]
        return hola
    })

    console.log("currentMongo" + currentMongo);
    console.log(currentFirebase);
    console.log(filteredPeluquerias);
    return (
        <div>
            <div className={s.titleAndSub}>
            <h1>Favoritos</h1>
            <p>Aqui puedes ver todas tus peluquerias favoritas</p>
            </div>
            { !currentMongo && sacarLosMilYUnArrays.length <= 0 ? <h3 className={s.iniciaSesion}>No tenes ningun fav o no estas logueado</h3> :
            <div className={s.cards}>
                {Cards ? (<Cards peluquerias={sacarLosMilYUnArrays}  />) : "no hay nada" }
            </div>
            }
        </div>
    );
};

export default Favoritos;