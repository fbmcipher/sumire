/* This component determines a common layout for all pages. */
import { useState } from 'react';
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import NowPlaying from '../../components/NowPlaying/NowPlaying.jsx';

/* Use a Context to keep track of what is being played throughout the application.
   By default, we aren't playing anything, so set it to a JS object with playing: false */
import PlaybackContext from '../../contexts/PlaybackContext.jsx';

export default ({children}) => {
    let [ currentlyPlaying, setCurrentlyPlaying ] = useState({playing: false})
    return (
        <PlaybackContext.Provider value={[currentlyPlaying, setCurrentlyPlaying]}>
            <div id="sumire">
                <audio className={styles.bgm_player}></audio>

                <NowPlaying />

                <div className={styles.layout}>
                    <TopBar />
                    {children}
                </div>
            </div>
        </PlaybackContext.Provider>

    )
}