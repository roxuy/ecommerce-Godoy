import React, {createContext} from 'react'

const CartContext = createContext();
const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

	const addToCart = function(name, quantity, id){
		const item = [...items, {'productId': id, 'name': name, 'quantity': quantity}];
		setItems(item);
		console.log(items);
	}

	const removeItem = function(id){
		if (items.length > 0) {
			const updateItems = items.filter(function (item){
				return item.productId !== id;
			});
			setItems(updateItems);
		}
	}
    
    return (
        <CartContext.CartProvider>
           {children} 
        </CartContext.CartProvider>
    )
}

export default CartProvider

