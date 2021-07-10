/** This component allows the user to scroll (horizontally)
 *  between its children.
 */

import React, { useRef }  from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import styles from './Carousel.module.css';

const Carousel = ({vertical, children}) => {

    const carouselContainerRef = useRef();

    const isVertical = useMediaQuery({query: '(max-width: 1000px)'});

    function onWheel(e){
        /* 
           if horizontally scrolling:
           map Y-scroll (most mice and trackpads) to X-scroll (most mice lack this) 
           this works surprisingly well. it even supports inertial scrolling and all that jazz
           for people with nice trackpads!   
        */
        if(!isVertical){
            console.log(e.deltaY);
            carouselContainerRef.current.scrollBy(e.deltaY, 0);
        }
    }

    return (
        <div onWheel={isVertical ? null : onWheel} ref={carouselContainerRef} className={styles.carouselContainer}>
            <div className={classNames(styles.carousel, 'carousel', vertical ? styles.carouselVertical : null)}>
                {children}
            </div>
        </div>
    )
}

export default Carousel;