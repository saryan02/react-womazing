import React from 'react'
import styles from './Categories.module.scss';

type CategoryProps = {
    value: number;
    onClickButton:(index:number) => void;
}

const Categories:React.FC<CategoryProps> = ({value, onClickButton}) => {
    const categories = ["Все", 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки']


    return(
        <div className={`d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 ${styles.root}`}>
            {
                categories.map((obj, index) => (
                    <button onClick={() => onClickButton(index)} className={value === index? styles.active:""} key ={index} >{obj}</button>
                ))
            }
        </div>
    )


}

export default Categories