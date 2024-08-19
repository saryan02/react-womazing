import React from 'react';
import styles from './LinkCloth.scss';

import photo1 from '../../assets/img/home/main/photothird.png'
import photo2 from '../../assets/img/home/main/photomain.png'
import Item from "../collectionItem";
import { ClothType} from "../../pages/FullCloth";

interface LinkClothProps {
    items: ClothType[];
}
const LinkCloth:React.FC<LinkClothProps> = ({items}) => {

    return (
        <>
            <div className={'container '}>
                <div className={'px-md-5 mx-md-5 my-4 '}>
                    <h2>Связаные товары</h2>
                </div>


                <div className={'row  mx-5 px-5  '}>
                    <div className={'w-25 col-12 col-md-4 d-flex flex-md-row flex-column justify-content-start gap-3'}>
                        {
                            items.map((obj, index)=> (
                                <Item key={index} name={obj.name} price={obj.price} prevPrice={obj.previously_price} image={obj.image}/>
                            ))
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default LinkCloth