import styles from './YouTubeEmbed.module.css';
import { useMediaQuery } from 'react-responsive';
import { useWindowWidth } from '@react-hook/window-size';

const YouTubeEmbed = ({ytid, showControls = true, height, width, layout = false}) => {
    const windowWidth = useWindowWidth();

    if(layout && layout == 'full'){
        /* Fill the entire screen. */
        const isVertical = useMediaQuery({query: '(max-width: 1000px)'});

        if(isVertical){
            width = '100vw';
            height = 'unset';
        } else {

            /* Get the aspect ratio of the display, and multiply it by the height of the window. */

            height = '100vh';
            width = (windowWidth || document.documentElement.clientWidth) + 'px';
        }
    }

    return (
        <div className={styles.wrapper} style={{
            height,
            width
        }}>
            <div className={styles.frameContainer}>
                <iframe width="858" height="483" src={`https://www.youtube.com/embed/${ytid}?controls=0&autoplay=1&loop=1&modsetbranding&showinfo=0&playlist=${ytid}&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

module.exports = YouTubeEmbed;