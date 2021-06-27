/* This component determines a common layout for all pages. */
import { useEffect, useRef, useState } from 'react';
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import NowPlaying from '../../components/NowPlaying/NowPlaying.jsx';

/* Use a Context to keep track of what is being played throughout the application.
   By default, we aren't playing anything, so set it to a JS object with playing: false */
import PlaybackContext from '../../contexts/PlaybackContext.jsx';

export default ({children}) => {

    let bgmPlayer = useRef();

    /* this state variable manages playback metadata */
    let [ currentlyPlaying, setCurrentlyPlaying ] = useState({playing: false})

    /* this state variable contains functions that manage what src is playing */

    /* helper functions */
    const playAudioFile = async (src) => {
        /* Stop current audio playback */
        await bgmPlayer.current.pause();

        /* Change the audio file that bgmPlayer is currently playing */
        let currentSource = bgmPlayer.current.querySelector('source');
        if(currentSource){
            currentSource.remove();
        }

        /* Add the new source file */
        let newSource = document.createElement('source');
        newSource.src = src;
        newSource.type = 'audio/mpeg';

        /* Append it to bgmPlayer */
        bgmPlayer.current.appendChild(newSource);

        /* Load the new audio... */
        await bgmPlayer.current.load();

        /* And play the audio tag! */
        bgmPlayer.current.play();
    }

    useEffect(()=>{
        if(currentlyPlaying.track){
            console.log(currentlyPlaying.track.src);
            playAudioFile(currentlyPlaying.track.src);
        }
    }, [currentlyPlaying]);

    return (
        <PlaybackContext.Provider value={[currentlyPlaying, setCurrentlyPlaying]}>
            <div id="sumire">
                <audio ref={bgmPlayer} className={styles.bgm_player}></audio>

                <NowPlaying />

                <div className={styles.layout}>
                    <TopBar />
                    {children}
                </div>
            </div>
        </PlaybackContext.Provider>

    )
}