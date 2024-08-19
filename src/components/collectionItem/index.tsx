import React from "react"
import styles from "./CollectionItem.module.scss"

interface CollectionItemProps {
    name: string,
    price: number,
    prevPrice: number,
    image: string

}

const Item: React.FC<CollectionItemProps> = ({name, price, prevPrice, image}) => {

    console.log(image)
    return (

        <div className={styles.root}>
            <div className ={styles.overlay_container}>
                <img src={image} alt="картинка"/>

                <div className={styles.overlay}>
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/>
                    </svg>

                </div>
            </div>


            <div className={styles.information}>

                <span>{name}</span>
                <div className={styles.price}>
                    {prevPrice !== 0 && <div><span className={styles.pervPrice}>${prevPrice}</span></div>}
                    <span>${price}</span>
                </div>
            </div>
        </div>

    )
}

export default Item