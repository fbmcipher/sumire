import { useContext } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import styles from './NowPlaying.module.css';

const NowPlaying = ({playing}) => {
    const [ currentlyPlaying, setCurrentlyPlaying ] = useContext(PlaybackContext);
    if (!currentlyPlaying.playing) return null;
    return (
        <div className={styles.nowPlaying}>
            <div className={styles.trackTitle}>{currentlyPlaying.track.title}</div>
            <Artists artists={currentlyPlaying.track.artists} />
        </div>
    )
}

export default NowPlaying;