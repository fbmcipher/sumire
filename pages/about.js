import styles from './about.module.css';
import { Favorite } from '@material-ui/icons'

const About = () => {
    return (
        <main className={styles.about}>
            <div className={styles.content}>
                <p>
                    <span className={styles.sumireName}>sumire,</span> named for the Japanese perennial flower, is an art house active in creative hotspots around the world - Leeds, London, Sheffield, New York, and more.
                </p>
                <p>we don’t restrict ourselves to a particular medium or kind of art. we prioritise authenticity, and allowing each artist to speak on what touches them, beyond all else.</p>
                <p>we honour independent art and creativity of all kinds — musicians, graphic designers, filmmakers, visual artists, developers, and more.</p>
                <p>we feel that the priorities of the industry and artists are out of line - more than ever in our modern age. we don’t enforce bureaucracy or structure on our artists. we are all equal in our common goal of empowering authentic and encourage creative expression.</p>
                <p>if you want to get in touch with us about a creative opportunities, our socials are always open!</p>
                <Favorite />
            </div>
        </main>
    )
}

export default About