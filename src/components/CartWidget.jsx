import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = () => {
    return (
        <a> 
            <FontAwesomeIcon icon={faShoppingCart} /> 7
        </a>
    );
};

export default CartWidget;