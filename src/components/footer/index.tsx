import React from 'react'
import styles from './Footer.module.scss'
import dress from '../../assets/img/header/dress.svg'
import inst from '../../assets/img/footer/instagram.svg'
import facebook from '../../assets/img/footer/facebook.svg'
import twitter from '../../assets/img/footer/twitter.svg'
import pay from '../../assets/img/footer/visa-mastercard.png'

const Footer: React.FC = () => {
    const sections = ['Главная', 'Магазин', 'О бренде', 'Контакты']
    const clothes = ['Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки']
    return (
        <div className={styles.root}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src={dress} alt="logo"/>
                    <span>WOMAZING</span>
                </div>
                <span className={styles.rights}>&copy; Все права защищены
                Политика конфиденциальности
                Публичная оферта</span>
            </div>
            <div className={styles.center}>
                <div className={styles.sections}>{
                    sections.map((obj, index) => (
                        <span key={index}>
                            {obj}
                        </span>
                    ))
                }
                </div>
                <div className={styles.clothes}>
                    <ul>
                        {
                            clothes.map((obj, index) => (
                                <li key={index}>
                                    {obj}
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.contacts}>
                    <span>+7 (495) 823-54-12 hello@womazing.com</span>
                </div>
                <div className={styles.social}>
                    <img src={inst} alt="inst"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                </div>

                <img src={pay} alt='pay'/>

            </div>
        </div>
    )
}

export default Footer