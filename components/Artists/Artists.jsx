import React from 'react';
import Link from 'next/link'

const Artists = ({artists}) => {

    console.log(artists)

    /* generate artist name components for all artists */
    let components = artists.map(artist => {
        /* try to link the artist, if we have one */
        if(artist.href){
            return <Link href={artist.href}><span>{artist.name}</span></Link>
        } else {
            return <span>{artist.name}</span>
        }
    })

    /* now, insert the comma components
       this iterates every element in the array.
       if it's not the last one, add a span containing a ,
    */
    let length = components.length;     /* components length will keep growing as we add commas,
                                           so stash its length right now here. */
    for (let i = 0; i < length; i++){
        if(i != (length - 1)){
            components.splice(i+1, 0, <span>, </span>)
        }
    }

    /* render the array of components */
    return (
        <span>
            {
                components.map((component, index) => {
                    return <React.Fragment key={index}>
                            { component } 
                    </React.Fragment>
                })
            }
        </span>
    )
}

export default Artists;