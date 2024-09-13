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
        <div>


            <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item  active">
                        <div className={swiper.root}>
                            <span className={swiper.title}>Новые поступления в этом сезоне</span>
                            <span className={swiper.description}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</span>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className={swiper.root}>
                            <span className={swiper.title}>Что-то новенькое. <br/>Мы заждались тебя.</span>
                            <span className={swiper.description}>Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={swiper.root}>
                            <span className={swiper.title}>Включай новый сезон с WOMAZING</span>
                            <span className={swiper.description}>Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>

    )

}

export default Index