import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';

export default function ItemDetail({item}) {
    const [state, setState] = useState();
    function onAdd(){
        // 
        console.log('llega un onAdd de itemDetail');
        //setState(state + parseInt(quantitytoAdd));
    }
    return (
        <div className="itemcontainer">
           <div className="text-center" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} className='item-img' />
           </div> 
           <div>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="font-weight-bold">
                        US$ {item.price}
                    </Card.Subtitle>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <ItemCount stock="5" initial="1"/>
                    <Button variant="secondary" size="lg">
                        Add cart
                    </Button>
                </Card.Body>
            </div> 
        </div>
    )
}
