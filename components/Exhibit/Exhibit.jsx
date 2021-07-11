import exhibitStyles from './Exhibit.module.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import BackButton from '../BackButton/BackButton';

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

    function back(){
        /* This function goes back in the window's history hierarchy. */
        window.history.go(-1);
    }

    return (
        <div ref={exhibitContainerRef} className={`${exhibitStyles.exhibit_container} ${styles ? styles.exhibit_container : null} ${className ? className : null}`} onWheel={onWheel}>

            <BackButton
                className={exhibitStyles.backButton}
                onClick={back}
            />

            {children}
        </div>
    )

}