import { getStylesForProperty } from 'css-to-react-native';
import styles from './ExhibitCard.module.css';
import Artists from '../Artists/Artists.jsx';

const ExhibitCard = ({exhibit, focussed, ref}) => {
    /** This component is used on the home/artist pages
     *  to link to an exhibit. Displays exhibit thumbnail,
     *  title, artists, content type, etc., as seen in mockup.
     * 
     *  By default we just show the exhibit pic - we only
     *  show the additional information if the card is focussed
     *  in its parent (typically the carousel)
     * 
     * @property {object} exhibit — the exhibit to display
     * @property {object} focussed - passed by parent to indicate
     *  whether or not to show info
     * @property {object} idKey — unique exhibit ID. used to identify exhibits in the carousel
    */

    console.log(exhibit.slug);

    return (
        <div
            className={styles.exhibit_card}
            style={{
                backgroundImage: `url(${exhibit.imageSrc})`
            }}
            id={exhibit.slug}
        >
            {/* Vignette makes text more readable on light bgs */}
            {/* Only display if focussed */}
            {focussed ? (
                <>
                <div className={styles.vignette}></div>
                <div className={styles.exhibit_info}>
                    <div></div>                
                    <div>
                        <div className={styles.exhibit_title}>{exhibit.title}</div>
                        <div className={styles.exhibit_subtitle}>
                            <span>made by </span>
                            <em><Artists
                                className={styles.exhibit_artists}
                                artists={exhibit.artists}
                            /></em>
                            <span> in november 2020</span>
                        </div>
                        <div className={styles.exhibit_type}>
                            {exhibit.type}
                        </div>
                    </div>
                </div>
            </>
            ) : null }
        </div>
    )
}

module.exports = ExhibitCard;