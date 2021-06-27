import { useContext, useState, useRef } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';

const NowPlaying = ({playing}) => {

    const seekBar = useRef();
    const [ didSetAudioTagListener, setDidSetAudioTagListener ] = useState(false);

    return (
        <PlaybackContext.Consumer>
            { ({curTrack, audioTag}) => {
                /* Instead of passing thru track duration as a prop to progress,
                   I will manipulate the element directly using the traditional
                   DOM methods to avoid crazy number of unnecessary renders. */
                if (!curTrack) return null;

                if(audioTag.current && !didSetAudioTagListener){
                    audioTag.current.addEventListener('timeupdate', (e)=>{
                        /* playback percentage */
                        let perc = (audioTag.current.currentTime / audioTag.current.duration);
                        /* set seekBar progress attribute */
                        seekBar.current.setAttribute('value', perc);
                    });

                    /* ensure we only set this listener once */
                    setDidSetAudioTagListener(true);
                }

                return (
                    <div className={styles.nowPlaying}>
                        <div className={styles.trackText}>
                            <div className={styles.trackTitle}>{curTrack.title}</div>
                            <Artists artists={curTrack.artists} />
                        </div>
                        <div className={styles.trackSeek}>
                            <progress ref={seekBar}></progress>
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