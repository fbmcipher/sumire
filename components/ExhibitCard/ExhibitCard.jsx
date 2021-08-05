import { getStylesForProperty } from 'css-to-react-native';
import { useResizeDetector } from 'react-resize-detector';
import styles from './ExhibitCard.module.css';
import Artists from '../Artists/Artists.jsx';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

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
   
    const isVertical = useMediaQuery({query: '(max-width: 1000px)'});

    /* get element height as a var so we can set it to width */
    const { height, width, ref } = useResizeDetector({
        handleHeight: true,
        onResize: ()=>{console.log('resize')}
    });

    console.log(width);

    console.log(exhibit.slug);

    // link is made up of exhibit's primary Artists and the slug.
    // or 'href' property in exhibit.
    let link = exhibit.href ? exhibit.href : `/@${exhibit.artists[0].username}/${exhibit.slug}`
    /*
        To make the ExhibitCard always a square:
            -> In horizontal scrolling mode, we set height to dynamically fill the container's height.
               We use resizeDetector to keep width the same as the dynamic height - creating a square.
            -> In vertical (mobile) mode, we do the same, but width is 100% instead, and we keep adjusting
               height on resize.
        We use a media query here (in JS!) to toggle this behaviour and set the correct style prop as seenm
        below. 
    */
    console.log({isVertical})
    let squareProps = {}
    if(isVertical){
        squareProps.height = `${width}px`
    } else {
        squareProps.width = `${height}px`
    }
    

    return (
        <Link href={link}>
            <div
            ref={ref}
            className={styles.exhibit_card}
            style={squareProps}
            id={exhibit.slug}
        >
            <Image className={styles.exhibit_background} src={exhibit.imageSrc} layout="fill" />   
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
                            <span> in {exhibit.released}</span>
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