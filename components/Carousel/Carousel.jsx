/** This component allows the user to scroll (horizontally)
 *  between its children.
 */

import React, { useRef }  from 'react';
import styles from './Carousel.module.css';

const Carousel = ({children}) => {

    const carouselContainerRef = useRef();

    function onWheel(e){
        /* map Y-scroll (most mice and trackpads) to X-scroll (most mice lack this) 
           this works surprisingly well. it even supports inertial scrolling and all that jazz
           for people with nice trackpads!   
        */
        console.log(e.deltaY);
        carouselContainerRef.current.scrollBy(e.deltaY, 0);
    }

    return (
        <div onWheel={onWheel} ref={carouselContainerRef} className={styles.carouselContainer}>
            <div class={`${styles.carousel} carousel`}>
                {children}
            </div>
        </div>
    )
}

export default Carousel;