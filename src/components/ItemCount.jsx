import React from 'react'
import { Button } from "react-bootstrap";
import '../css/ItemCount.css'

function ItemCount ({  onAdd, quantity}){


    return (
    <div className="cartcontainer">
        <Button variant="dark" onClick={()=>onAdd(1)}> + </Button>    
        <p>{quantity} </p>
        <Button variant="dark" onClick={()=>onAdd(-1)}> - </Button>
    </div>
    )
}

export default ItemCount;