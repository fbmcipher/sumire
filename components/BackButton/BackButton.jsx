/** This component renders a button that, when clicked/tapped, triggers the action
 *  passed as prop.
 */

import { ArrowBack } from '@material-ui/icons'
import classNames from 'classnames';
import styles from './BackButton.module.css';

const BackButton = ({onClick, className}) => {
    return (
        <div onClick={onClick} className={classNames(styles.backButton, className)}>
            <ArrowBack />            
        </div>
    )
}

export default BackButton;