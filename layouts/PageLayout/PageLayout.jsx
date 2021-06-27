/* This component determines a common layout for all pages. */
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';

export default ({children}) => {
    return (
        <div>
            <audio autoPlay={true} controls>
                <source src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg"></source>
            </audio>
            <div className={styles.layout}>
                <TopBar />
                {children}
            </div>
        </div>

    )
}