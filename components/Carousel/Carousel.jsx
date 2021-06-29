/** This component allows the user to scroll (horizontally)
 *  between its children.
 *  Focussed children are given a CSS transformation to make
 *  the current state of the carousel visible — and a prop
 *  "focussed" is passed to the child component with which
 *  it can do whatever it wants.
 */

import React, { useState }  from 'react';
import styles from './Carousel.module.css';

const Carousel = ({children}) => {
    const [ visibleChildId, setVisibleChildId ] = useState(null);

    let cloneChildren = children.map(child => {

        let newProps;
        if(child.props.exhibit.slug == visibleChildId){
            console.log('yah')
            newProps = { focussed: true };
        } else {
            newProps = {};
        }

        let cloneChild = React.cloneElement(child, newProps);
        console.log(cloneChild);
        return cloneChild;
    })

    const onScroll = ({target}) => {
        /* Find the first element which is fully scrolled in
           view */

        let carousel = target.querySelector('.carousel');
        
        let found = false;

        for(let child of Array.from(carousel.children)){
            let { x } = child.getBoundingClientRect();
            if(x >= 0 && !found){
                found = child;
            }
        }

        console.log(found.id);

        setVisibleChildId(found.id);
    }

    return (
        <div onScroll={onScroll} className={styles.carouselContainer}>
            <div class={`${styles.carousel} carousel`}>
                {cloneChildren}
            </div>
        </div>
    )
}

export default Carousel;