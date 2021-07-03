/** This is a mini version of the shopping cart that appears when the user
 *  hides the larger shopping cart, but still has things in their cart.
 *  It displays a glyph, and the number of items in the cart.
 *  Clicking it makes the new cart visible.
 */

import ShoppingCartContext from "../../contexts/ShoppingCartContext"
import styles from './ShoppingCartMini.module.css';
import { ShoppingCart } from '@material-ui/icons'
import { useContext } from "react";
import classNames from 'classnames';

const ShoppingCartMini = ({props}) => {
    const { items, cartVisible, setCartVisible } = useContext(ShoppingCartContext);

    let hidden = (
        Object.keys(items).length == 0
        || cartVisible
    )
    
    let count = 0;
    /* count is determined by sum of all qtys */
    let qtys = Object.keys(items).map(id => items[id].qty);
    for(let qty of qtys){
        count += qty;
    }

    return (
        <div onClick={()=>{setCartVisible(true)}} className={classNames(styles.shoppingCartMini, {hidden})}>
            <ShoppingCart />
            <div className={styles.count}>
                {count} 
            </div>    
        </div>
    )
}

export default ShoppingCartMini;