/** This is the component for the HAM Fruity Collection
 *  Exhibit page. */

import Head from 'next/head'  // i.e. <head> element
import Image from 'next/image';

/* dependencies */
import { useContext, useState } from 'react';
import classNames from 'classnames';

/* components */
import Exhibit from '../../../components/Exhibit/Exhibit.jsx';
import { ResponsiveStack, ResponsiveStackChild } from '../../../components/ResponsiveStack/ResponsiveStack.jsx';

/* styles */
import styles from './index.module.css';
import exhibitStyles from './Exhibit.module.css';

/* contexts */
import ShoppingCartContext from '../../../contexts/ShoppingCartContext.jsx';

/* Product component (used only with this exhibition) */
const Product = ({product, light}) => {
  /** Renders a product (pass in product obj.) */

  /* Price is passed in as an array of arrays, for different
  currencies. This is so we can support intl. shipping.

  [
    ['GBP', 1000], // 10.00 GBP
    ['USD', 1050]  // 10.50 USD
  ]

  In this demo assignment we only care about GBP prices.
  Just trying to futureproof a bit :)
  */

  /* get addItemToCart function from ShoppingCartHandler via ShoppingCartContext */
  const { addItemToCart } = useContext(ShoppingCartContext);

  const onClick = ()=>{
    /* When click, add item to cart */
    addItemToCart(product);
  }

  const priceToDisplay = product.price.filter(price => price[0] == "GBP")[0];
  const priceSymbol = '£'; // normally would be a conditional here
  
  /* Price value is specified as an integer of pennies.
     So we need to get the amount of pounds, and amount 
     of pennies.
     This code does that. 1050 -> 10, 50 */

  const priceMajor = Math.floor(priceToDisplay[1] / 100);
  const priceMinor = String(priceToDisplay[1] % 100).padStart(2, '0')

  return <ResponsiveStackChild className={classNames(styles.fullWidthPic, styles[product.id], styles.product, product.light ? styles.light : null)}>
    <div className={styles.productContent}>
      
      <div className={styles.productContentTop}>
        <h2>{product.title}</h2>
      </div>
      
      <div className={styles.productContentBottom}>
        
        <div>
          <div className={styles.price}>
            <div className={styles.priceSymbol}>
              {priceSymbol}
            </div>
            <div className={styles.priceMajor}>
              {priceMajor}
            </div>
            <div className={styles.priceMinor}>
              {priceMinor}
            </div>
          </div>
          <div className={styles.shipping}>free shipping in the UK</div>
        </div>

        <div>
          <button onClick={onClick} className={styles.addToCart}>Add to Cart</button>
        </div>
      
      </div>

    </div>
    <Image layout="fill" src={product.imgSrc} />
  </ResponsiveStackChild>
}

const products = [
  {
    id: "bananas",
    title: "potassiyum",
    price: [
      ['GBP', 1200]
    ],
    light: true,
    imgSrc: "/exhibits/ham/products/bananas.jpg"
  },
  {
    id: "salad",
    title: "froot salad",
    price: [
      ['GBP', 1200]
    ],
    imgSrc: "/exhibits/ham/products/salad.jpg"
  },
  {
    id: "lemons",
    title: "make lemonade",
    price: [
      ['GBP', 1200]
    ],
    light: true,
    imgSrc: "/exhibits/ham/products/lemons.jpg"
  },
  {
    id: "joos",
    title: "joos",
    price: [
      ['GBP', 1200]
    ],
    imgSrc: "/exhibits/ham/products/joos.jpg"
  },
  {
    id: "apple",
    title: "'freshly' picked",
    price: [
      ['GBP', 1200]
    ],
    light: true,
    imgSrc: "/exhibits/ham/products/apple.jpg"
  },
]

/* begin page */
export default function Fruity() {
  return (
    <div>
      <Head>
        <title>the fruity collection - HAM</title>
      </Head>
      <Exhibit className="exhibit-fruity" styles={exhibitStyles}>
        <div className={classNames('container', styles.container)}>
          <ResponsiveStack>

            {/* Intro section */}
            <ResponsiveStackChild className={styles.intro}>
              <img src="/exhibits/ham/ham.png" height="256" width="256" />
              <h2>presents...</h2>
              <h1>"the fruity collection"</h1>
            </ResponsiveStackChild>

            {/* Models section */}
            <ResponsiveStackChild className={styles.pics}>
                <img src="/exhibits/ham/salad.jpg"  className={styles.saladPic}  />
                <img src="/exhibits/ham/apple.jpg"  className={styles.applePic}  />
                <img src="/exhibits/ham/lemons.jpg" className={styles.lemonsPic} />
                <img src="/exhibits/ham/joos.jpg"   className={styles.joosPic}   />
            </ResponsiveStackChild>

            {/* Break section */}
            <ResponsiveStackChild className={styles.break} />

            {/* Products list */}
            <ResponsiveStackChild className={styles.products}>
              {products.map(product => <Product key={product.id} product={product} />)}
            </ResponsiveStackChild>
            
          </ResponsiveStack>
        </div>
     </Exhibit>

    </div>
  )
}
