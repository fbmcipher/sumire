/* This component handles background audio playback.
   Used to play music for e.g. albums. */

import { useContext, useEffect, useRef, useState } from "react";
import NowPlaying from '../../components/NowPlaying/NowPlaying.jsx';
import NowPlayingMini from '../../components/NowPlayingMini/NowPlayingMini.jsx';

/* Use a Context to keep track of what is being played throughout the application.
   By default, we aren't playing anything, so set it to a JS object with playing: false */
import AudioContext from '../../contexts/AudioContext.jsx';

const AudioHandler = props => {
    /* This is the root AudioHandler component.
       It is invisible, and should be inserted somewhere where it is always accessible
       (in our site, we will use the default PageLayout) */
    
    /* Generate reference for audioTag */
    let audioTag = useRef();

    /* State variables:
       queue, setQueue           — manage queue array
       playingIdx, setPlayingIdx — currently playing index in queue
       curTrack, setCurTrack       - current track object
       visible, setVisible         - is now playing widget visible?
    */
   
    const [ queue, setQueue ] = useState([]);
    const [ playingIdx, setPlayingIdx ] = useState(null);
    const [ curTrack, setCurTrack ] = useState(null);
    const [ visible, setVisible ] = useState(false);

    /* Init context */
    const ctx = useContext(AudioContext);

    /* Helper functions */
    const playAudioFile = async (src) => {
        /* Stop current audio playback (if any) */
        await audioTag.current.pause();

        /* Change the audio file that audioTag is currently playing */
        let currentSource = audioTag.current.querySelector('source');
        if(currentSource){
            currentSource.remove();
        }

        /* Add the new source file */
        let newSource = document.createElement('source');
        newSource.src = src;
        newSource.type = 'audio/mpeg';

        /* Append it to audioTag */
        audioTag.current.appendChild(newSource);

        /* Load the new audio... */
        await audioTag.current.load();

        /* And play the audio tag! */
        await audioTag.current.play();
    }

    /* This code runs if the currently playing index changes (if track finished,
        skipped, etc.) or if the queue changed (new album is being played, new
        track, etc.) */
    useEffect(()=>{
        setVisible(true);
        if(playingIdx in queue){
            setCurTrack(queue[playingIdx]);
            playAudioFile(queue[playingIdx].src);
        }
    }, [playingIdx, queue])

    return (
        <AudioContext.Provider value={{
            queue, setQueue, playingIdx, setPlayingIdx, curTrack, setCurTrack,
            audioTag, visible, setVisible
        }}>
            <NowPlayingMini />
            <NowPlaying />
            <audio ref={audioTag}></audio>
            {props.children}
        </AudioContext.Provider>
    )
}

module.exports = AudioHandler;