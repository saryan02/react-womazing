import React from "react";

import {Swiper as Slider, SwiperSlide as Slide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import swiper from './Swiper.module.scss'


const slides = [{
    title: "Новые поступления в этом сезоне",
    description: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать."
},
    {
        title: "Что-то новенькое. Мы заждались тебя.",
        description: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!"
    },
    {
        title: "Включай новый сезон с WOMAZING",
        description: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров"
    }]
const Index: React.FC = () => {
    return (
        <div className={swiper.wrapper}>

            <Slider
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    // bulletClass: swiper.swiperPaginationBullet,
                    // bulletActiveClass: swiper.swiperPaginationBulletActive
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    slides.map((value, index) => (
                        <Slide key={index}>
                            <div className={swiper.root}>
                                <span className={swiper.title}>{value.title}</span>
                                <span className={swiper.description}>{value.description}</span>


                            </div>

                        </Slide>
                    ))
                }


            </Slider>

        </div>

    )

}

export default Index