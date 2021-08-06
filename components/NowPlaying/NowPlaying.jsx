import { useContext, useState, useRef, useEffect } from 'react';
import AudioContext from '../../contexts/AudioContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';
import classNames from 'classnames';
import { PlayArrow, Pause, FastRewind, FastForward, Close } from '@material-ui/icons';
import Image from 'next/image';

/* this hook allows us to force a rerender */
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const NowPlaying = ({playing}) => {

    return (
        <AudioContext.Consumer>
            { ({curTrack, audioTag, visible, setVisible, nextTrack, prevTrack }) => {
                /* Instead of passing thru track duration as a prop to progress,
                   I will manipulate the element directly using the traditional
                   DOM methods to avoid crazy number of unnecessary renders. */
                let hidden = (
                    !curTrack || !visible
                )

                return (
                    <div className={classNames(styles.nowPlayingContainer, { hidden })}>
                        <div className={styles.nowPlaying}>
                            {curTrack ? (
                            <>
                                <div onClick={()=>{setVisible(false)}} className={styles.closeButtonContainer}>
                                    <Close />
                                </div>

                                <div className={styles.trackInfo}>

                                    <div className={styles.trackArt}>
                                        <Image src={curTrack.imageSrc} height={64} width={64} />
                                    </div>

                                    <div className={styles.trackText}>
                                        <div className={styles.trackTitle}>{curTrack.title}</div>
                                        <div className={styles.trackArtists}>
                                            <Artists artists={curTrack.artists} />
                                        </div>
                                    </div>

                                </div>
                                
                                <div className={styles.trackSeek}>
                                    <SeekBar audioTag={audioTag} />
                                </div>
                                <div className={styles.trackControls}>
                                    <TrackControls audioTag={audioTag} prevTrack={prevTrack} nextTrack={nextTrack} />
                                </div>
                            </>
                            ): null}
                        </div>
                    </div>
                )
            } }
        </AudioContext.Consumer>
    )
}

const TrackControls = ({audioTag, prevTrack, nextTrack }) => {
    /* Renders track controls for the passed <audio> tag.
       This means - rewind, play/pause, fast forward. */
    const forceUpdate = useForceUpdate();
    const [ didSetPauseEventListener, setDidSetPauseEventListener ] = useState(false);

    if(audioTag.current && !didSetPauseEventListener){
        audioTag.current.addEventListener('pause', (e)=>{
            forceUpdate();
        })

        audioTag.current.addEventListener('play', (e)=>{
            forceUpdate();
        });

        setDidSetPauseEventListener(true);
    }

    const playPause = ()=>{
        console.log({audioTag});
        audioTag.current.paused ? audioTag.current.play() : audioTag.current.pause();
        forceUpdate();
    }

    return (
        <div className={styles.trackControls}>

            <div className={classNames(styles.trackControl, styles.fastRewind)}>
                <FastRewind onClick={ prevTrack } />
            </div>

            <div onClick={playPause} className={classNames(styles.trackControl, styles.playPause)}>
                {audioTag.current.paused ? <PlayArrow /> : <Pause />}
            </div>

            <div className={classNames(styles.trackControl, styles.fastForward)}>
                <FastForward onClick={ nextTrack } />
            </div>

        </div>
    )
}

const SeekBar = ({audioTag}) => {
    const seekBar = useRef();
    const [ didSetAudioTagListener, setDidSetAudioTagListener ] = useState(false);
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

    if(audioTag.current && seekBar.current && !didSetAudioTagListener){
        seekBar.current.value = 0;
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

    const onChange = e => {
        /* calculate the time to seek to from the percentage */
        let newPerc = e.target.value / 100;
        let newTime = audioTag.current.duration * newPerc;
        seekBar.current.value = e.target.value;
        audioTag.current.currentTime = newTime;
    }

    console.log('rerender')

    const onMouseDown = e => {
        /* when seekbar is receiving mouse/touch input, set isSeeking
           so timeupdate handler stops updating the input while
           the user is trying to interact with it. 
        */ 
        setIsSeeking(true);
    }

    const onMouseUp = e => {
        setIsSeeking(false);
    }

    return (
        <div className={styles.trackSeek}>
            <input 
                onChange={onChange}
                onMouseDown={onMouseDown}
                onTouchStart={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchEnd={onMouseUp}
            min="0" max="100" type="range" ref={seekBar} />
        </div>
    )
}

export default NowPlaying;