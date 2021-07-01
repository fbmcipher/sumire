import { getStylesForProperty } from 'css-to-react-native';
import { useResizeDetector } from 'react-resize-detector';
import styles from './ExhibitCard.module.css';
import Artists from '../Artists/Artists.jsx';
import Link from 'next/link';

const ExhibitCard = ({exhibit, focussed}) => {
    /** This component is used on the home/artist pages
     *  to link to an exhibit. Displays exhibit thumbnail,
     *  title, artists, content type, etc., as seen in mockup.
     * 
     *  By default we just show the exhibit pic - we only
     *  show the additional information if the card is focussed
     *  in its parent (typically the carousel)
     * 
     * @property {object} exhibit — the exhibit to display
     * @property {object} idKey — unique exhibit ID. used to identify exhibits in the carousel
    */
   
    /* get element height as a var so we can set it to width */
    const { height, width, ref } = useResizeDetector({
        handleHeight: true,
        onResize: ()=>{
            console.log('move');
        }
    });

    console.log(exhibit.slug);

    // link is made up of exhibit's primary Artists and the slug.
    let link = `/@${exhibit.artists[0].username}/${exhibit.slug}`

    return (
        <Link href={link}>
            <div
            ref={ref}
            className={styles.exhibit_card}
            style={{
                backgroundImage: `url(${exhibit.imageSrc})`,
                width: `${height}px`
            }}
            id={exhibit.slug}
        >
            {/* Vignette makes text more readable on light bgs */}
            {/* Only display if focussed */}
            <div 
            className={styles.exhibit_detail}>
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
            </div>
        </div>
        </Link>
    )
}

module.exports = ExhibitCard;