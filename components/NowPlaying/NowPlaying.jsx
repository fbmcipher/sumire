import { useContext } from 'react';
import PlaybackContext from '../../contexts/PlaybackContext.jsx';

const NowPlaying = ({playing}) => {
    const [ currentlyPlaying, setCurrentlyPlaying ] = useContext(PlaybackContext);
    if (!currentlyPlaying.playing) return null;
    return (
        <h1>I am playing {currentlyPlaying.track.title}</h1>
    )
}

export default NowPlaying;