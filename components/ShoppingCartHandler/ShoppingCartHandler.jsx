/* This component handles the global shopping cart.
   It provides a Context so that shopping cart data can be retrieved/manipulated
   by all components (i.e. we can add items to the cart from anywhere), and
   also displays the ShoppingCart component on all pages. */

import ShoppingCartContext from '../../contexts/ShoppingCartContext.jsx';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import ShoppingCartMini from '../../components/ShoppingCartMini/ShoppingCartMini.jsx';
import { useState, useContext } from 'react';

/* this hook allows us to force a rerender */
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const ShoppingCartHandler = ({children}) => {
    /* This component is invisible, and is mounted on PageLayout so it is
       always accessible */
    
    /* init state variables */
    const [ items, setItems ] = useState({});
    const [ cartVisible, setCartVisible ] = useState(false);
    const forceUpdate = useForceUpdate();

    /* helper functions */
    const addItemToCart = (item, qty=1) => {
        /** Add an item to the cart! 
           We get just an "item" to cart, but we need to manage an extra
           "qty" object, too.

           We represent cart as an object - the key for each element in the
           object is the item's id, the value is the item ID.

           We check if the ID appears in the object. If it doesn't, add it
           and create that new "qty" property - set it to the value of the
           qty arg.

           If the ID already is in the object, just add the value of qty to
           that existing object's qty prop. 
        */

           
        if(!(item.id in items)){
            /* add it! set qty = 0, we will update it in next step */
            items[item.id] = item;
            items[item.id].qty = 0;
        } 

        /* add qty */
        items[item.id].qty += qty;
        
        /* update state var! */
        setItems(items);
        setCartVisible(true);

        forceUpdate();
    }

    const calculateTotal = (currency) => {
        /* Calculate the total of all elements in the cart for the given currency */
        
        let ret = [currency, 0];

        Object.keys(items).forEach(id => {
            let item = items[id];
            let price = item.price.filter(price => price[0] == currency)[0];
            ret[1] += (price[1] * item.qty);
        })

        return [ret];
    }

    const removeItemFromCart = (item) => {
        /* Removes item from cart. Accepts either item object or item ID. */
        let id;
        if(item.id){
            id = item.id
        } else {
            id = item;
        }

        delete(items[id]);
        setItems(items);
        forceUpdate();
    }

    /* init context */
    const ctx = useContext(ShoppingCartContext);

    return (
        <ShoppingCartContext.Provider value={{
            /* "provides" these values & functions to all Consumers. */
            items, setItems, addItemToCart, removeItemFromCart, calculateTotal,
            cartVisible, setCartVisible
        }}>
            <ShoppingCartMini />
            <ShoppingCart items={items} />
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartHandler;