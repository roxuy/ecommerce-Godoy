import React from 'react'
import { useState} from "react";
import { Button } from "react-bootstrap";


function ItemCount ({ stock, initial, onAdd }){
    const [quantity, setQuantity] = useState(initial);
    function onAdd (value) {
        if (value>0 && quantity+1<=stock){
            setQuantity(parseInt(quantity) + parseInt(value));
        } else if (value<0 && quantity>=1){
            setQuantity(parseInt(quantity) + parseInt(value));
        }
    }

    return (
    <div>
        <Button variant="dark" onClick={()=>onAdd(1)}> + </Button>    
        <input size="5" value ={quantity} />
        <Button variant="dark" onClick={()=>onAdd(-1)}> - </Button>
    </div>)
}

export default ItemCount;