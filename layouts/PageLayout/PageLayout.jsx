/* This component determines a common layout for all pages. */
import styles from './PageLayout.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';

export default ({children}) => {
    return (
        <div className={styles.layout}>
            <TopBar />
            {children}
        </div>
    )
}