import { useContext, useState, useRef } from 'react';
import ShoppingCartContext from '../../contexts/ShoppingCartContext.jsx';
import styles from './ShoppingCart.module.css';
import { Delete, Close, Remove, Add, Shop } from '@material-ui/icons'
import Price from '../../components/Price/Price.jsx';
import classNames from 'classnames';

const ShoppingCart = ({items}) => {

    console.log({items});
    const ctx = useContext(ShoppingCartContext);

    return (
        <ShoppingCartContext.Consumer>
            { ({items, cartVisible, setCartVisible}) => {

                let hidden = (
                    Object.keys(items).length == 0
                        ||
                    !cartVisible
                );

                return (
                    <div className={classNames(styles.shoppingCart, {hidden})}>
                        <ShoppingCartHeader />
                        <ShoppingCartContent items={items} />
                        <ShoppingCartFooter items={items} />
                    </div>
                )
            } }
        </ShoppingCartContext.Consumer>
    )
}

const ShoppingCartFooter = ({items}) => {
    const { calculateTotal } = useContext(ShoppingCartContext);

    return (
        <div className={styles.shoppingCartFooter}>
            <div className={styles.total}>
                total <Price currency="GBP" price={calculateTotal('GBP')} symFont={true}></Price>
            </div>
            <div>
                <button onClick={()=>{alert('this button does nothing')}}className={styles.checkout}>checkout</button>
            </div>
        </div>
    )
}

const ShoppingCartContent = ({items}) => {
    return (
        <div className={styles.shoppingCartContent}>
            <ul>
                {
                    Object.keys(items).map(id => {
                        let item = items[id];
                        return <ShoppingCartItem item={item} key={id} />;
                    })
                }
            </ul>
        </div>
    )
}

const ShoppingCartItem = ({item, key}) => {
    const { removeItemFromCart } = useContext(ShoppingCartContext);

    return (
        <li key={key}>
            <div className={styles.shoppingCartItem}>
                <div className={styles.shoppingCartItemImage}>
                    <img src={item.imgSrc} />
                </div>

                <div className={styles.shoppingCartItemInfo}> 
                    <div className={styles.shoppingCartItemTitle}>{item.title}</div>
                    <div className={styles.shoppingCartItemPrice}>
                        <Price price={item.price} qty={item.qty} currency={"GBP"} />
                    </div>
                </div>

                <ShoppingCartItemQtyPicker item={item} max={9} />

                <div className={styles.deleteContainer} onClick={() => {removeItemFromCart(item)}}>
                    <Delete fontSize={"small"} />
                </div>
            </div>
        </li>
    )
}

const ShoppingCartItemQtyPicker = ({item, max = 9}) => {
    const { addItemToCart } = useContext(ShoppingCartContext);

    const increment = () => {
        /* Add another instance to the cart. */
        addItemToCart(item, 1);
    }

    const decrement = () => {
        /* Remove an instance from the cart. We still use addItemToCart,
           but just set qty to -1 */
        addItemToCart(item, -1);
    }

    return (
        <div className={styles.shoppingCartItemQty}>
            <button disabled={item.qty <= 1} onClick={decrement} className={styles.shoppingCartItemQtyButton}><Remove /></button>
            <div className={styles.shoppingCartItemQtyValue}>
                {item.qty}
            </div>
            <button disabled={item.qty >= max} onClick={increment} className={styles.shoppingCartItemQtyButton}><Add /></button>
        </div>
    )
}

const ShoppingCartHeader = () => {
    const { setCartVisible } = useContext(ShoppingCartContext);
    return (
        <div className={styles.shoppingCartHeader}>
            <div className={styles.shoppingCartHeaderTitle}>shopping cart</div>
            <div onClick={()=>{setCartVisible(false)}} className={styles.closeButtonContainer}>
                <Close />
            </div>
        </div>
    )
}
 
export default ShoppingCart;