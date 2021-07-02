/** This component renders its children in a statically positioned
 *  fashion that fills the display.
 */

 import styles from './Background.module.css'
 
 /* this library makes it much easier for us to conditionally
    add classes, instead of messing with strings. 
    (i have a love/hate relationship with small utility NPM
    packages like this.) */

 import classNames from 'classnames';

 const Background = ({ children, className }) => {
     return (
         <div className={classNames(
             styles.background, className
         )}>
             {children}
         </div>
     )
 }
 
 export default Background;