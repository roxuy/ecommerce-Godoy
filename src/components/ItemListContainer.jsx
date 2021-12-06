
//import { Card,Button } from "react-bootstrap"
import '../css/ItemListContainer.css'
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    
    return (
        <div className='container-fluid' id='main'>
            <h1>{greeting}</h1>
            <div className='container'>
                Product example
                <ItemCount stock='5' initial='1'/>
            </div>
        </div>
    )
}

export default ItemListContainer