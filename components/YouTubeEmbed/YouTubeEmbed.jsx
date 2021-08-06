import styles from './YouTubeEmbed.module.css';
import { useMediaQuery } from 'react-responsive';

const YouTubeEmbed = ({ytid, showControls = false, height, width, layout = false}) => {
    const isVertical = useMediaQuery({query: '(max-width: 1000px)'});

    if(layout && layout == 'full'){
        /* Fill the entire screen. */
        if(isVertical){
            width = '100vw';
            height = 'unset';
        } else {
            width = '171vh';
            height = '100vh';
        }
    }

    return (
        <div className={styles.wrapper} style={{
            height,
            width
        }}>
            <div className={styles.frameContainer}>
                <iframe width="858" height="483" src={`https://www.youtube.com/embed/${ytid}?controls=${showControls ? 1 : 0}&autoplay=1&loop=1&modsetbranding&showinfo=0&playlist=${ytid}&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

module.exports = YouTubeEmbed;