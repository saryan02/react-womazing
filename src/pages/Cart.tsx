import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer";
import styles from "../scss/Cart.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import CartItem from "../components/cartItem";

const Cart: React.FC = () => {
    const cartItems = useSelector((state:RootState) => state.cartSlice.items)
    const totalPrice = useSelector((state:RootState) => state.cartSlice.totalPrice)

    return (
        <div className={`container px-5 my-5  ${styles.root}`}>
            {/*<Header/>*/}

            <div className={'my-5'}>
                <h1 className={''}>Корзина</h1>
                <div className={`${styles.road}`}>
                    <span>Главная —</span>
                    <span> Корзина</span>
                </div>
            </div>

            <div className={` ${styles.cart} `}>
                <div className={` d-flex ${styles.head} `}>
                    <div className={` ${styles.name}`}>
                        <span>Товар</span>
                    </div>
                    <div className={`pr-5 d-flex justify-content-end justify-content-md-around ${styles.details}`}>
                        <span>Цена</span>
                        <span className='d-none d-md-block'>Количество</span>
                        <span className='d-none  d-md-block'>Всего</span>
                    </div>
                </div>
                {cartItems.map((item) => <CartItem {...item} />)}

            </div>

            <div className={` ${styles.execution}`}>
                <div className='my-5 d-flex justify-content-md-between flex-column flex-md-row gap-3 align-items-center align-items-md-none'>
                    <div className='d-flex align-items-end flex-md-row flex-column gap-4'>
                        <input className='form-control' placeholder='Введите купон'/>
                        <button type='button' className={` btn btn-outline-success ${styles.button}`}>Применить купон</button>
                    </div>
                    <div>
                        <button type='button' className={`btn btn-outline-success ${styles.button}`}>Обновить корзину</button>
                    </div>
                </div>
                <div className={`mb-5 mx-5 d-flex align-items-center gap-2 justify-content-md-end flex-md-row flex-column ${styles.total}`}>
                    <div className={styles.sum}><span> Итого: {totalPrice} $</span></div>
                    <button type='button' className={`btn btn-success ${styles.button}`}>Оформить заказ</button>
                </div>
            </div>

            {/*<Footer/>*/}

        </div>
    )
}

export default Cart;
