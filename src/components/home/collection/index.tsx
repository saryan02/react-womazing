import React from 'react'
import styles from "./Collection.module.scss"
import Item from "../../collectionItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {selectCloth} from "../../../redux/slices/cloth/selectors";
import {Link} from "react-router-dom";


const Collection: React.FC = () => {
    const clothes = useSelector(selectCloth)

    const collections = clothes.map((obj, index) => (
        <Link className={styles.link} to={`/cloth/${obj.id}`}>
            <Item key={index} name={obj.name} price={obj.price} prevPrice={obj.previously_price}
                  image={obj.image}/>
        </Link>
    ))
    return (<>
        <div className={`d-flex flex-column align-items-center align-items-md-start ${styles.root}`}>
            <h2>Новая коллекция</h2>
            <div className='mt-3 d-flex  gap-0 w-100 justify-content-around flex-column  flex-lg-row'>
                {
                    collections
                }
            </div>
        </div>
    </>)
}

export default Collection;