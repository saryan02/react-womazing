import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import "../scss/home.scss"
import Swiper from "../components/home/swiper";
import Principle from "../components/home/principle";
import picMain from "../assets/img/home/main/photomain.png"
import picSecond from "../assets/img/home/main/photosecond.png"
import picThird from "../assets/img/home/main/photothird.png"
import Team from "../components/home/team";
import Footer from "../components/footer";
import axios from 'axios'
import Collection from "../components/home/collection";
import {useDispatch} from "react-redux";
import {fetchClothes} from "../redux/slices/cloth/slice";
import {inspect} from "util";


const Home: React.FC = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        const fetch = async () => {

            // @ts-ignore
            dispatch(fetchClothes('/home'))
        }
        fetch()
    }, [])


    return (<>
            <Header/>
            <div className={' d-flex gap-5 flex-column'}>
                <div className="main_section ">
                    <div className="information">
                        <div className="information__left">
                            <Swiper/>
                            <div className="buttons">
                                <svg width="67" height="68" viewBox="0 0 67 68" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="67" height="67" transform="translate(0 0.5)" fill="#6E9C9F"
                                          fill-opacity="0.1"/>
                                    <path d="M33 20V48M33 48L26 40.8108M33 48L40 40.8108" stroke="#6E9C9F"/>
                                </svg>


                                <button>Открыть магазин</button>
                            </div>
                        </div>
                        <div className="information__right d-none  d-lg-block ">
                            <img className="first_women" src={picMain} alt="главная вумен"/>
                            <img className='second_women' src={picSecond} alt="второстепенная вумен"/>
                            <img className='third_women' src={picThird} alt="третьестепенная вумен"/>
                        </div>

                    </div>

                </div>

                <div className='container d-flex flex-column gap-5 mb-5'>
                    <Principle/>
                    <Collection/>
                    <Team/>
                </div>


                {/*<div className="wrapper">*/}
                {/*    <Principle/>*/}
                {/*</div>*/}

                {/*<div className="block_width">*/}
                {/*    <div className="wrapper">*/}
                {/*        <Collection/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='block_width'>*/}
                {/*    <div className="wrapper">*/}
                {/*        <Team/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </>
    )
}

export default Home;