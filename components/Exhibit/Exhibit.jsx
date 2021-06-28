import styles from './Exhibit.module.css';
import { useEffect, useRef } from 'react';

export default function Exhibit({exhibit, children, styles, className}){
    /**
     * This is the container element for an Exhibit.
     */

    /* this is equivalent of componentDidMount — i.e. only run once, when the
       component is first rendered.
       create an event handler to update the scroll bar component */

    const exhibitContainerRef = useRef();

    function onWheel(e){
        /* map Y-scroll (most mice and trackpads) to X-scroll (most mice lack this) 
           this works surprisingly well. it even supports inertial scrolling and all that jazz
           for people with nice trackpads!   
        */
        console.log(e.deltaY);
        exhibitContainerRef.current.scrollBy(e.deltaY, 0);
    }

    return (
        <div ref={exhibitContainerRef} className={`${styles.exhibit_container} ${className ? className : null}`} onWheel={onWheel}>
            {children}
        </div>
    )

}