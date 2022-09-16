// import {useState} from 'react'
import styles from './box.module.css';

const Box = props => {
    const {color} = props
    // const [boxBackground, setBoxBackground] = useState(color)

    // const changeColor = () => {
    //     setBoxBackground(color)
    // }

    return(
        <div className={styles.boxes}>
            <div className={styles.box} style={{backgroundColor: color}}>
                <h2>{color}</h2>
            </div>
        </div>
        
    )
}

export default Box