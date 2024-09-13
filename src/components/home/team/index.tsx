import React from "react";
import styles from "./Team.module.scss"
import picfirst from "../../../assets/img/home/team/team1.png";
import picsecond from "../../../assets/img/home/team/team2.png";
import picthird from "../../../assets/img/home/team/team3.png";
import {Link} from "react-router-dom";


const Team: React.FC = () => {

    return (
        <div className={styles.container}>
            <span>Команда мечты Womazing</span>
            <div className='d-flex justify-content-between flex-column flex-md-row  align-items-md-start align-items-center gap-5 mt-5'>


                <div id="carouselExampleIndicator" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={picfirst} alt='люди'/>
                        </div>
                        <div className="carousel-item ">
                           <img  src={picsecond} alt='люди'/>
                        </div>
                        <div className="carousel-item">
                            <img  src={picthird} alt='люди'/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicator"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className={`${styles.information} d-flex flex-column gap-3`}>
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