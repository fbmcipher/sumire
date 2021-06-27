/* This component determines a common layout for all pages. */
import styles from './Layout.module.css';
import TopBar from '../TopBar/TopBar.jsx';

export default ({children}) => {
    return (
        <div className={styles.layout}>
            <TopBar />
            {children}
        </div>
    )
}