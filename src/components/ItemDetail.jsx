import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

export default function ItemDetail({item}) {
    let stock=5;
    let initial=1;
    const [quantity, setQuantity] = useState(initial);
    function onAdd (value) {
        if (value>0 && quantity+1<=stock){
            setQuantity(parseInt(quantity) + parseInt(value));
        } else if (value<0 && quantity>=1){
            setQuantity(parseInt(quantity) + parseInt(value));
        }
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
                    <ItemCount onAdd={onAdd} quantity={quantity}/>
                    <Button variant="secondary" size="lg">
                        <Link to="/Cart" className="text-white">Add cart</Link>
                    </Button>
                </Card.Body>
            </div> 
        </div>
    )
}
