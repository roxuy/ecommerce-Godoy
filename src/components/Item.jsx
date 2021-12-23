import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../css/Item.css'
const Item = ({key,item}) => {
return ( <Link to={`/item/${item.id}`}>
        <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureUrl} className='card-img' />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}.
                    </Card.Text>
                    <Button variant="secondary" size="lg">
                    Add cart
                    </Button>
                </Card.Body>
            </Card>
            </Link> 
        )};
        
export default Item;