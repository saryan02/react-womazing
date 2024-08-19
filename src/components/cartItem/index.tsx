import React from 'react'
import photo from '../../assets/img/home/team/team1.png'
import {inspect} from "util";
import styles from './CartItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeItem, changeQuantity} from "../../redux/slices/cart/slice";
import {QuantityType} from "../../redux/slices/cart/types";
import {RootState} from "../../redux/store";

type CartItemProps = {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;

}

const CartItem: React.FC<CartItemProps> = ({id, image, title, price, quantity}) => {
    const dispatch = useDispatch()

    const clickCross = () => {
        dispatch(removeItem(id))
    }
    const clickQuantity = (value:number) => {
        const item:QuantityType = {
            id:id,
            quantity:value
        }

        dispatch(changeQuantity(item))
    }

    return (
        <div className={`${styles.root} container d-flex justify-content-md-between align-items-center my-5 gap-5 gap-md-0 `}>
            <div className={`${styles.sections} d-flex gap-3 gap-sm-3 gap-lg-5 align-items-center flex-column flex-md-row`}>
                <button onClick={clickCross} type="button" className="btn-close" aria-label="Close"></button>
                <img src={image} alt='фото товара'/>
                <span>{title} </span>
            </div>
            <div className={`${styles.sections} d-flex justify-content-md-around   align-items-end flex-column flex-md-row  `}>
                <span>{price}$</span>
                <input onChange={(e) => clickQuantity(Number(e.target.value))}  type="number" id="quantity" className="form-control" defaultValue={quantity} min="1"/>
                <span className='d-none d-sm-flex'>{price * quantity}$</span>
            </div>
        </div>
    )
}

export default CartItem
