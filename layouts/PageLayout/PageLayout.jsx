/* This component determines a common layout for all pages. */
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';

export default ({children, className}) => {

    return (
        <div id="sumire">
            <div className={`${styles.layout} ${className ? className : ''}`}>
                <TopBar />
                {children}
            </div>
        </div>
    )
}