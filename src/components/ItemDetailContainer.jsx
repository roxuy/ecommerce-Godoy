import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import '../css/ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { id } = useParams (); 
    let itemData= { 'id':'1', 'title':'PHILODENDRON NARROW “JUNGLE BOOGIE” IN 4-INCH POT', 'description':'“Philodendron Jungle Boogie Plants are an interesting plant for interior decorating. Tiger Tooth Philodendron has glossy green, deeply cut leaves that create a beautiful tropical accent in any room or office. This philodendron has very few problems and tolerates neglect and dry indoor air.”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610733391-il_794xN.2480917409_qe1e.jpg' }
    
    let promise = new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(itemData)
        }, 2000)
    });
    
    const getItem = async() => {
        try {
            const data= await promise;
            setItem(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getItem()}, [id]);
    
    return (
        <div id="main">
            <div className="itempcontainer">
            <p>Recibo itemId: {id}</p>
            {item && <ItemDetail item={item}/>    } 
            </div>
        </div>
    )
}

