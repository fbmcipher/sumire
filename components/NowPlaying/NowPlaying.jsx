import { useContext } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';

const NowPlaying = ({playing}) => {
    return (
        <PlaybackContext.Consumer>
            { ({curTrack}) => {
                console.log(curTrack);
                if (!curTrack) return null;
                return (
                    <div className={styles.nowPlaying}>
                        <div className={styles.trackTitle}>{curTrack.title}</div>
                        <Artists artists={curTrack.artists} />
                    </div>
                )
            } }
        </PlaybackContext.Consumer>
    )
}

export default NowPlaying;