import styles from './YouTubeEmbed.module.css';

const YouTubeEmbed = ({ytid, showControls = true, height, width}) => {
    return (
        <div className={styles.wrapper} style={{
            height,
            width
        }}>
            <div className={styles.frameContainer}>
                <iframe width="858" height="483" src={`https://www.youtube.com/embed/${ytid}?controls=0&autoplay=1&loop=1&modsetbranding&showinfo=0&list=${ytid}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

module.exports = YouTubeEmbed;