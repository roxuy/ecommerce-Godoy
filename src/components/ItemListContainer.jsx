import React from 'react'
import { useEffect, useState } from 'react';
import '../css/ItemListContainer.css'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState();
    let itemsData= [
        { 'id':'1', 'title':'PHILODENDRON NARROW “JUNGLE BOOGIE” IN 4-INCH POT', 'description':'“Like all philodendrons, you have to be careful to not overwater it,” says Carter. “Only give it a drink when the soil is completely dry. When it comes to light, it likes it bright or medium and indirect.”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610733391-il_794xN.2480917409_qe1e.jpg' },
        {  'id':'2', 'title':'BURGUNDY RUBBER TREE', 'description':'“This is one of my favorite ficus trees,” says Carter. “It’s less finicky than its popular cousin, the fiddle-leaf fig, and it can grow up to 25 feet indoors. When it comes to light, it does well when it’s bright and indirect. ”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589560889-bloomscape_product-burgundy-rubber-tree-clay-1.jpg'},
        {'id':'3', 'title':'PILEA PEPEROMIOIDES', 'description':'“This is a widely loved plant with many endearing nicknames like UFO plant, pancake plant, and Chinese money plant,” says Carter. “Its love of humidity makes it a great way to add color to a bathroom. The sprouted leafy discs could also work in any space with bright indirect light.”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589561181-Monet_SolidCarousel.jpg'}
    ]

    let promise = new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(itemsData)
        }, 2000)
    })
    const fetchData = async() => {
        try {
            const data= await promise;
            setItems(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()}, []);
        
    return (
        <div className='container-fluid' id='main'>
            <h1>{greeting}</h1>
            <div className='container'>
                <ItemList items={items}/>
                <ItemCount stock='5' initial='1'/>
            </div>
        </div>
    )
}

export default ItemListContainer