/* This component determines a common layout for all pages. */
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import AudioHandler from '../../components/AudioHandler/AudioHandler.jsx';

/* Use a Context to keep track of what is being played throughout the application.
   By default, we aren't playing anything, so set it to a JS object with playing: false */
import PlaybackContext from '../../contexts/PlaybackContext.jsx';

export default ({children}) => {

    let bgmPlayer = useRef();

    /* this state variable manages playback metadata */
    let [ currentlyPlaying, setCurrentlyPlaying ] = useState({playing: false})
    let { player } = useContext(PlaybackContext);

    console.log({player});

    /* this state variable contains functions that manage what src is playing */

    /* helper functions */

    /* i.e. onChangeTrack */
    useEffect(()=>{
        if(!currentlyPlaying.track) return false;
        
        let { track } = currentlyPlaying;

        /* play new audio */
        playAudioFile(track.src);
        
        /* provide metadata to the browser */
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: track.title
            })
        }

    }, [currentlyPlaying]);

    return (

        <AudioHandler>
            <div id="sumire">

                <div className={styles.layout}>
                    <TopBar />
                    {children}
                </div>
            </div>
        </AudioHandler>
    )
}