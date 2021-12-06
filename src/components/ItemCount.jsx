import { useState} from "react";
import { Button } from "react-bootstrap";

function ItemCount ({ stock, initial, onAdd }){
    const [quantity, setQuantity] = useState(initial);
    function onAdd ({ value }) {
        setQuantity(quantity+value);
    }
    return (
    <div>
        <Button variant="dark" onClick={()=>onAdd(1)}> + </Button>    
        <input size="5" type="text" value ={quantity} />
        <Button variant="dark" onClick={()=>onAdd(-1)}> - </Button>
    </div>)
}

export default ItemCount;