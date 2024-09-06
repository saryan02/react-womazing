import React, {useEffect, useState} from 'react';
import {RootState} from "../redux/store";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../scss/FullCloth.module.scss';
import LinkCloth from "../components/fullcloth";
import Header from '../components/header/Header'
import Footer from '../components/footer/index';
import {useDispatch, useSelector} from "react-redux";
import {addItem as item} from "../redux/slices/cart/slice"


export type ClothType = {
    id: number;
    name: string;
    price: number;
    previously_price: number;
    size_item: string[];
    color: string[];
    image: string;
}

const FullCloth: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [cloth, setCloth] = useState<ClothType>();
    const [related, setRelated] = useState<ClothType[]>();
    const [sizeId, setSizeId] = useState(0);
    const [colorId, setColor] = useState(0);
    const dispatch = useDispatch()
    const cartItem = useSelector((state: RootState) => state.cartSlice.items)

    const onClickSize = (index: number) => {
        setSizeId(index);
    }
    const onClickColor = (index: number) => {
        setColor(index)
    }
    if (cartItem) {
        console.log('cartItem' + cartItem.length)
    }
    const addItem = () => {

        if (cloth) {
            const cartitem = {
                id: cloth.id,
                size: cloth.size_item[sizeId],
                color: cloth.color[colorId],
                title: cloth.name,
                image: cloth.image,
                price: cloth.price,
                quantity: 1,
            }

            dispatch(item(cartitem))
        }

    }
    useEffect(() => {
        async function fetchCloth() {
            try {
                const {data} = await axios.get(`/getCloth?id=${id}`);
                setCloth(data[0]);
            } catch {
                alert('Ошибка при загрузке данных');
            }
            try {
                const {data} = await axios.get('/home');
                setRelated(data);
            } catch {
                alert('Ошибка при загрузке данных');
            }
        }

        fetchCloth();
    }, [id]);

    if (!cloth) {
        return <><span>Ничего нет</span></>;
    } else {
        return (
            <>
                <Header/>
                <div className={`container mx-md-5 my-5 ${styles.root}`}>


                    <div className='row d-flex justify-content-center align-items-center min-vh-100 px-3'>
                        <div className='col-12 col-md-4 d-flex flex-column text-center align-content-center'>
                            <h2 className={`text-left mb-5`}>{cloth.name}</h2>
                            <div className={`d-flex justify-content-start ${styles.image}`}>
                                <img src={cloth.image} alt="товар" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center m-lg-5">
                            <div className="d-flex justify-content-start align-items-center my-3">
                                <span className={`text h4  ${styles.goldPrice}`}>${cloth.price}</span>
                                {cloth.previously_price !== 0 &&
                                    <span
                                        className="text-muted ms-3 text-decoration-line-through">${cloth.previously_price}</span>
                                }
                            </div>
                            <div className="my-3">
                                <label htmlFor="size" className="form-label">Выберите размер</label>
                                <div className={`d-flex gap-2 ${styles.btn_size}`}>
                                    {cloth.size_item.map((size, index) => (
                                        <button key={index} onClick={() => onClickSize(index)}
                                                className={index === sizeId ? styles.active : ''}>{size}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="my-3 d-flex flex-column">
                                <label htmlFor="color" className="form-label">Выберите цвет</label>
                                <div className={`d-inline-block  ${styles.color_buttons}`}>
                                    {cloth.color.map((obj, index) => (
                                        <button key={index} onClick={() => onClickColor(index)}
                                                className={`me-2 ${index === colorId ? styles.active : ''}`} style={{
                                            backgroundColor: obj,
                                        }}></button>
                                    ))}
                                </div>
                            </div>
                            <div className={`d-flex flex-column ${styles.end_section}`}>
                                <label htmlFor="quantity" className="form-label">Количество</label>
                                <div className="d-flex my-3 gap-2 ">
                                    <input type="number" id="quantity" className="form-control" defaultValue="1"
                                           min="1"/>
                                    <button onClick={addItem}>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-center  align-items-center min-vh-100 mx-5'>
                        {related !== undefined &&
                            <LinkCloth items={related}/>
                        }
                    </div>

                </div>
                <Footer/>
            </>
        );
    }
}

export default FullCloth;
