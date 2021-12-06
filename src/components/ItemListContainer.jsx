
//import { Card,Button } from "react-bootstrap"
import '../css/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    
    return (
        <div className='container-fluid' id='main'>
            <h1>{greeting}</h1>
            <div className='container'>
                Product example
            </div>
        </div>
    )
}

export default ItemListContainer