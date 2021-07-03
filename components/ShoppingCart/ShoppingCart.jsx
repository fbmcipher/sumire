import { useContext, useState, useRef } from 'react';
import ShoppingCartContext from '../../contexts/ShoppingCartContext.jsx';
import styles from './ShoppingCart.module.css';
import { Delete, Close } from '@material-ui/icons'
import Price from '../../components/Price/Price.jsx';

const ShoppingCart = ({items}) => {

    console.log({items});

    return (
        <ShoppingCartContext.Consumer>
            { ({items}) => {
                return (
                    <div className={styles.shoppingCart}>
                        <ShoppingCartHeader />
                        <ShoppingCartContent items={items} />
                    </div>
                )
            } }
        </ShoppingCartContext.Consumer>
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
    return (
        <li key={key}>
            <div className={styles.shoppingCartItem}>
                <div className={styles.shoppingCartItemImage}>
                    <img src={item.imgSrc} />
                </div>

                <div className={styles.shoppingCartItemInfo}> 
                    <div className={styles.shoppingCartItemTitle}>{item.title}</div>
                    <div className={styles.shoppingCartItemPrice}>
                        <Price price={item.price} currency={"GBP"} />
                    </div>
                </div>
                
                <div className={styles.deleteContainer}>
                    <Delete fontSize={"small"} />
                </div>
            </div>
        </li>
    )
}

const ShoppingCartHeader = () => {
    return (
        <div className={styles.shoppingCartHeader}>
            <div className={styles.shoppingCartHeaderTitle}>shopping cart</div>
            <div className={styles.closeButtonContainer}>
                <Close />
            </div>
        </div>
    )
}
 
export default ShoppingCart;