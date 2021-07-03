/* This component determines a common layout for all pages. */
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';

/** This component handles the Audio Context (keeping track of playback across
 *  pages/components) and the Now Playing view */
import AudioHandler from '../../components/AudioHandler/AudioHandler.jsx';

/** Use another context to keep track of all mock data used in this prototype.
 *  This would be replaced with actual API response data in a release build.
 */
import DataContext from '../../contexts/DataContext.jsx';

/* Import ShoppingCartHandler (which manages shopping cart state and displays
   ShoppingCart component on all pages.) */
import ShoppingCartHandler from '../../components/ShoppingCartHandler/ShoppingCartHandler';

export default ({children, className}) => {
    /** begin mock data */
    const members = [
        {
            name: 'faiz',
            imageSrc: 'https://via.placeholder.com/150x150',
            username: 'faiz'
        },
        {
            name: 'HAIDER SAMSARA',
            imageSrc: 'https://assets.cosy.land/images/2021/02/HD26.jpg',
            backgroundSrc: '/artists/haidersamsara/bg.jpg',
            username: 'haidersamsara'
        },
        {
            name: 'Caracara',
            imageSrc: 'https://via.placeholder.com/150x150',
            username: 'caracara',
        },
        {
            name: 'pier_ogii',
            imageSrc: 'https://via.placeholder.com/150x150',
            username: 'pier_ogii'
        },
        {
            name: 'pjd.',
            imageSrc: 'https://via.placeholder.com/150x150',
            username: 'pjd'
        },
        {
            name: 'HAM',
            imageSrc: 'https://via.placeholder.com/150x150',
            username: 'ham'
        }
    ]

    const helpers = {
        getArtistByUsername: (username) => {
            /**
             * Returns an artist from the members array.
             * -normally- i would fetch this data using an API or something,
             * but since this assignment is front-end only, i just need
             * enough functionality to actually bring in data
             */
        
            return members.filter(member => member.username === username)[0];
        }
    }

    const exhibits = [
        {
        title: "HAIDERNISM",
        slug: 'haidernism', /* slug = URL-safe identifier */
        artists: [
            helpers.getArtistByUsername('haidersamsara')
        ],
        imageSrc: '/exhibits/haidernism.png',
        type: 'album'
        },
        {
        title: "There Is A Beautiful Nothing",
        slug: 'thereisabeautifulnothing',
        artists: [
            helpers.getArtistByUsername('caracara')
        ],
        imageSrc: '/exhibits/thereisabeautifulnothing.jpg',
        type: 'album'
        },
        {
        title: "the fruity collection",
        slug: 'fruity', /* slug = URL-safe identifier */
        artists: [
            helpers.getArtistByUsername('ham')
        ],
        imageSrc: '/exhibits/ham/fruity.png',
        type: 'fashion collection'
        },
    ]

    const data = {members, exhibits, helpers};

    /** end mock data */

    return (
        <DataContext.Provider value={data}>
            <ShoppingCartHandler>
                <AudioHandler>
                    <div id="sumire">

                        <div className={`${styles.layout} ${className ? className : ''}`}>
                            <TopBar />
                            {children}
                        </div>
                    </div>
                </AudioHandler>
            </ShoppingCartHandler>
        </DataContext.Provider>
    )
}