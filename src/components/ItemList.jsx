import React from 'react'
import Item from "./Item";

const ItemList = ({items}) => {
    //hacer map
    return (
        <div className='container'>
        {items && items.map((item=>(<Item key={item.id}item={item}/>)))}
        </div>
    )
}
export default ItemList;