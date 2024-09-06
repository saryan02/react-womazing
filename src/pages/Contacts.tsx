import Header from "../components/header/Header";
import React, {useState} from "react";
import styles from '../scss/Contacts.module.scss'
import '../scss/custom.scss'
import {YMaps, Map, Placemark, Panorama} from '@pbe/react-yandex-maps';
import Footer from "../components/footer";


const Contacts: React.FC = () => {
    const [show, setShow] = useState(false)

    const openAlert = () => {
        setShow(true)
    }
    const closeAlert = () => {
        setShow(false)
    }
    return (
        <>
            <div className={'container'}>
                <Header/>
            </div>
        <div className={`container d-flex flex-column my-5 ${styles.root}`}>
            <div className={'my-5'}>
                <h1 className={''}>Контакты</h1>
                <div className={`${styles.road}`}>
                    <span>Главная —</span>
                    <span> Контакты</span>
                </div>
            </div>
            <div>
                <YMaps>
                    <div>
                        <Map height='476px' width={styles.coordinates}
                             defaultState={{center: [55.75, 37.57], zoom: 9, controls: ["zoomControl"],}}
                             modules={["control.ZoomControl"]}>
                            <Placemark defaultGeometry={[55.751574, 37.573856]}/>

                            {/*<Panorama defaultPoint={[55.733685, 37.588264]} />*/}

                        </Map>
                    </div>
                </YMaps>
            </div>
            <div className={'text-center '}>
                <div className={'pt-md-4 row d-flex flex-column   flex-md-row'}>
                    <div className={'col d-flex flex-column my-3'}>
                        <span>Телефон</span>
                        <span>+7 (495) 823-54-12</span>
                    </div>
                    <div className={'col d-flex flex-column my-3'}>
                        <span>E-mail</span>
                        <span>info@sitename.com</span>
                    </div>
                    <div className={'col d-flex flex-column my-3'}>
                        <span>Адрес</span>
                        <span>г. Москва, 3-я улица Строителей, 25</span>
                    </div>
                </div>
                <span>Напишите нам</span>

                <div className={` d-flex justify-content-center align-items-center ${styles.feedback}`}>

                    <form className={''} onSubmit={openAlert}>

                        <div className="input-group mb-3">
                            <label htmlFor="validationServerUsername" className="form-label"></label>
                            <input type="text" className="form-control" id="validationServerUsername" placeholder="Имя"
                                   aria-label="Username" aria-describedby="basic-addon1" required/>
                        </div>


                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="basic-url" placeholder='E-mail'
                                   aria-describedby="basic-addon3" required/>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder='Телефон'
                                   aria-label="Amount (to the nearest dollar)" required/>
                        </div>

                        <div className="input-group">
                        <textarea className="form-control" placeholder='Сообщение' aria-label="With textarea"
                                  required></textarea>
                        </div>
                        <button className={'btn btn-primary'}>Отпправить форму</button>
                    </form>
                    {show
                        &&
                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                    onClick={closeAlert}></button>
                        </div>
                    }

                </div>
            </div>
        </div>
            <Footer/>
</>
    )
}

export default Contacts;