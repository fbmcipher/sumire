import styles from './ResponsiveStack.module.css';

const ResponsiveStack = ({children}) => {
    return (
        <div className={`${styles.responsiveStack} responsiveStack`}>
            {children}
        </div>
    )
}

const ResponsiveStackChild = ({children, className}) => {
    return (
        <section className={`${styles.responsiveStackChild} responsiveStackChild ${className}`}>
            {children}
        </section>
    )
}

module.exports = { ResponsiveStack, ResponsiveStackChild }