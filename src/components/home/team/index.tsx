import React from "react";
import styles from "./Team.module.scss"
import {Swiper as Slider, SwiperSlide as Slide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import picfirst from "../../../assets/img/home/team/team1.png";
import picsecond from "../../../assets/img/home/team/team2.png";
import picthird from "../../../assets/img/home/team/team3.png";
import {Link} from "react-router-dom";
import arrow from "../../../assets/img/arrow.svg"


const Team: React.FC = () => {

    return (
        <div className={styles.container}>
            <span>Команда мечты Womazing</span>
            <div className={styles.content}>

                <Slider
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[ Navigation,Pagination]}
                    className="mySwiper"
                >
                    <Slide>
                        <img src={picfirst} alt='люди'/>

                    </Slide>
                    <Slide>
                        <img src={picsecond} alt='люди'/>
                    </Slide>
                    <Slide>
                        <img src={picthird} alt='люди'/>
                    </Slide>

                </Slider>

                <div className={styles.information}>
                    <h3>Для каждой</h3>
                    <span>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</span>
                    <span>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</span>
                    <Link className={styles.link} to="#">Подробнее о бренде</Link>
                </div>

            </div>
        </div>
    )
}

export default Team