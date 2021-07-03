import { useContext, useState, useRef } from 'react';
import ShoppingCartContext from '../../contexts/ShoppingCartContext.jsx';
import styles from './ShoppingCart.module.css';

const ShoppingCart = ({items}) => {

    console.log({items});

    return (
        <ShoppingCartContext.Consumer>
            { ({items}) => {
                <h1>{items}</h1>
            } }
        </ShoppingCartContext.Consumer>
    )
}

export default ShoppingCart;