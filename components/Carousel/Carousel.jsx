/** This component allows the user to scroll (horizontally)
 *  between its children.
 */

import React, { useState }  from 'react';
import styles from './Carousel.module.css';

const Carousel = ({children}) => {
    return (
        <div className={styles.carouselContainer}>
            <div class={`${styles.carousel} carousel`}>
                {children}
            </div>
        </div>
    )
}

export default Carousel;