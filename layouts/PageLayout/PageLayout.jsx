/* This component determines a common layout for all pages. */
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import AudioHandler from '../../components/AudioHandler/AudioHandler.jsx';

/* Use a Context to keep track of what is being played throughout the application.
   By default, we aren't playing anything, so set it to a JS object with playing: false */
import AudioContext from '../../contexts/AudioContext.jsx';

/** Use another context to keep track of all mock data used in this prototype.
 *  This would be replaced with actual API response data in a release build.
 */
import DataContext from '../../contexts/DataContext.jsx';


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
        imageSrc: '/exhibits/fruity.png',
        type: 'fashion collection'
        },
    ]

    const data = {members, exhibits, helpers};

    /** end mock data */

    return (
        <DataContext.Provider value={data}>
            <AudioHandler>
                <div id="sumire">

                    <div className={`${styles.layout} ${className ? className : ''}`}>
                        <TopBar />
                        {children}
                    </div>
                </div>
            </AudioHandler>
        </DataContext.Provider>
    )
}