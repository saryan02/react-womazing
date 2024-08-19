import React from 'react'
import styles from '../scss/TEST.module.scss'

const Test = () => {
    return (<>

        <div className={`container ${styles.container}`}>
            <div className={`row justify-content-md-center ${styles.row}`}>
                <div className={`col-7 ${styles.col}`}>1</div>
                <div className={`col-2 ${styles.col}`}>2</div>
                <div className={`col ${styles.col}`}>3</div>
            </div>
        </div>
    </>)
}

export default Test;