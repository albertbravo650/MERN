import styles from './Styles.module.css'

export default (props) => {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}