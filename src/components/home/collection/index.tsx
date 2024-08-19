import React from 'react'
import styles from "./Collection.module.scss"
import Item from "../../collectionItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

interface CollectionProps {
    id: number,
    name: string,
    price: number,
    prevPrice: number,
    size: string[],
    color: string[],
    image: string

}

const Collection: React.FC = () => {
    const dispatch = useDispatch()
    const clothes = useSelector((state: RootState) => state.clothSlice.items)

    const collections = clothes.map((obj, index) => (
        <Item key={index} name={obj.name} price={obj.price} prevPrice={obj.previously_price}
              image={obj.image}/>
    ))
    return (<>
        <div className={styles.root}>
            <h2>Новая коллекция</h2>
            <div className={styles.collections}>
                {
                    collections
                }
            </div>
        </div>
    </>)
}

export default Collection;