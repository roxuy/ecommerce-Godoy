import React from 'react'
import { useEffect, useState, useParams } from 'react';
import '../css/ItemListContainer.css'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState();
    //const { category } = useParams ();
    //console.log(category); 
    let itemsData= [
        { 'id':'1', 'category':'plants','title':'PHILODENDRON NARROW “JUNGLE BOOGIE” IN 4-INCH POT', 'description':'“Like all philodendrons, you have to be careful to not overwater it,” says Carter. “Only give it a drink when the soil is completely dry. When it comes to light, it likes it bright or medium and indirect.”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610733391-il_794xN.2480917409_qe1e.jpg' },
        { 'id':'2', 'category':'plants','title':'BURGUNDY RUBBER TREE', 'description':'“This is one of my favorite ficus trees,” says Carter. “Its less finicky than its popular cousin, the fiddle-leaf fig, and it can grow up to 25 feet indoors. When it comes to light, it does well when its bright and indirect. ”', 'price':18, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589560889-bloomscape_product-burgundy-rubber-tree-clay-1.jpg'},
        { 'id':'3', 'category':'plants','title':'PILEA PEPEROMIOIDES', 'description':'“This is a widely loved plant with many endearing nicknames like UFO plant, pancake plant, and Chinese money plant,” says Carter. “Its love of humidity makes it a great way to add color to a bathroom. The sprouted leafy discs could also work in any space with bright indirect light.”', 'price':15, 'pictureUrl':'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589561181-Monet_SolidCarousel.jpg'},
        { 'id':'4', 'category':'accesories','title':'TOTE BAG', 'description':'The plants of your dreams. Designed by Plant. 13.5 Wide X 15.5 ', 'price':15, 'pictureUrl':'https://cdn.shopify.com/s/files/1/0508/5147/9723/products/key-tag-02-forweb_1800x1800.jpg' },
        { 'id':'5', 'category':'accesories','title':'PHILODENDRON NARROW “JUNGLE BOOGIE” IN 4-INCH POT', 'description':'Like all philodendrons, you have to be careful to not overwater it,” says Carter. “Only give it a drink when the soil is completely dry. When it comes to light, it likes it bright or medium and indirect.”', 'price':21, 'pictureUrl':'https://cdn.shopify.com/s/files/1/0508/5147/9723/products/blacktote-01-forweb_1800x1800.jpg' },
        { 'id':'6', 'category':'accesories','title':'PHILODENDRON NARROW “JUNGLE BOOGIE” IN 4-INCH POT', 'description':'Like all philodendrons, you have to be careful to not overwater it,” says Carter. “Only give it a drink when the soil is completely dry. When it comes to light, it likes it bright or medium and indirect.”', 'price':15, 'pictureUrl':'https://cdn.shopify.com/s/files/1/0508/5147/9723/products/AS-Plant-Animals-11-ForWeb_0f0e2815-a38b-4245-9b33-28c7afb06097_1800x1800.jpg' }
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
            //console.log(category);
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
            </div>
        </div>
    )
}

export default ItemListContainer