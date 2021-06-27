import { useContext, useState, useRef } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';

const NowPlaying = ({playing}) => {

    const seekBar = useRef();
    const [ didSetAudioTagListener, setDidSetAudioTagListener ] = useState(false);
    const [ didSetSeekBarListener, setDidSetSeekBarListener ] = useState(false);
    const [ isSeeking, _setIsSeeking ] = useState(false);

    /* We can't access state inside an event listener in React in functional components.
       So we'll need to create a ref to represent the state, and a custom setter function that
       keeps the value of the actual state + ref state synchronised.
       Thanks to https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559 for demystifying yet another of React's... *charming* idiosyncracies.
    */

    const isSeekingRef = useRef(isSeeking);
    const setIsSeeking = data => {
        isSeekingRef.current = data;
        _setIsSeeking(data);
    }

    return (
        <PlaybackContext.Consumer>
            { ({curTrack, audioTag}) => {
                /* Instead of passing thru track duration as a prop to progress,
                   I will manipulate the element directly using the traditional
                   DOM methods to avoid crazy number of unnecessary renders. */
                if (!curTrack) return null;

                if(audioTag.current && !didSetAudioTagListener){
                    audioTag.current.addEventListener('timeupdate', (e)=>{
                        /* keeps the slider synched with current playback completion */
                        /* playback percentage */
                        
                        /* don't update the range slider if user is seeking. this will
                        cause the range input to flicker between the value the user is
                        trying to input vs. the one we are updating */
                        if(isSeekingRef.current) return false;

                        let perc = (audioTag.current.currentTime / audioTag.current.duration);
                        /* set seekBar progress attribute */
                        seekBar.current.value = perc * 100;
                    });

                    /* ensure we only set this listener once */
                    setDidSetAudioTagListener(true);
                }

                if(seekBar.current && !didSetSeekBarListener){
                    seekBar.current.addEventListener('change', (e)=>{
                        /* calculate the time to seek to from the percentage */
                        let newPerc = e.target.value / 100;
                        let newTime = audioTag.current.duration * newPerc;
                        audioTag.current.currentTime = newTime;
                    })

                    seekBar.current.addEventListener('mousedown', (e)=>{
                        /* when seekbar is receiving mouse/touch input, set isSeeking
                            so timeupdate handler stops updating the input while
                            the user is trying to interact with it. */ 
                        setIsSeeking(true);
                    })

                    seekBar.current.addEventListener('mouseup', (e)=>{
                        setIsSeeking(false);
                    })

                    /* ensure we only set this listener once */
                    setDidSetSeekBarListener(true);
                }

                return (
                    <div className={styles.nowPlaying}>
                        <div className={styles.trackText}>
                            <div className={styles.trackTitle}>{curTrack.title}</div>
                            <Artists artists={curTrack.artists} />
                        </div>
                        <div className={styles.trackSeek}>
                            <input min="0" max="100" value="0" type="range" ref={seekBar} />
                        </div>
                        <div className={styles.trackControls}>

                        </div>
                    </div>
                )
            } }
        </PlaybackContext.Consumer>
    )
}

export default NowPlaying;