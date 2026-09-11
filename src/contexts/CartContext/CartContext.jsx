import {createContext} from "react";

const CartContext = createContext({
    productCart: [],
    setProductCart: () => {}
});

export default CartContext;