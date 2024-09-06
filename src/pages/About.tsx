import React from 'react'
import Header from "../components/header/Header";
import womanjeans from '../assets/img/about/sonnie-hiles-gG70fyu3qsg-unsplash 1.png'
import womandress from '../assets/img/about/gbarkz-vqKnuG8GaQc-unsplash 1.png'
import styles from '../scss/About.module.scss'
import Footer from "../components/footer";
import {Link} from "react-router-dom";

const About = () => {

    return (
        <>
            <div className={'container'}>
                <Header/>
            </div>
        <div className={`container gx-5 my-5 d-flex flex-column text-center text-md-start align-items-center ${styles.root}`}>

            <div className={'row d-flex flex-row'}>

                <div className={'my-5'}>
                    <h1 className={''}>О бренде</h1>
                    <div className={`${styles.road}`}>
                        <Link to={'/'}> <span>Главная —</span></Link>
                        <span> О бренде</span>
                    </div>
                </div>

                <div className={'col-md-6 col 12 d-inline-flex mb-5'}>

                    <img src={womanjeans} alt={'фото'}/>
                </div>

                <div className={'col-md-6 col-12 d-flex mt-sm-4 flex-column gap-3 '}>
                    <h3>Идея и женщина</h3>
                    <span>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</span>
                    <span>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </span>
                </div>

                <div>

                </div>
            </div>
            <div className={'row d-flex mb-5 flex-md-row mt-5 justify-content-md-between flex-row-reverse'}>

                <div className={' col-md-6 col-12 d-flex flex-column gap-3 mb-5'}>
                    <h3 className={''}>Магия в деталях</h3>
                    <span className={''}> Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</span>
                    <span className={''}>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </span>
                </div>

                <div className={'col-md-6 col-12 d-flex justify-content-md-end'}>
                    <img src={womandress} alt={'фото'}/>

                </div>

            </div>

            <button className={` btn-success mb-5 ${styles.btn_shop}`}> Перейти в магазин</button>

        </div>
            <Footer/>
            </>
    )
}

export default About;