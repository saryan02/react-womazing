import React from 'react'
import styles from './Footer.module.scss'
import dress from '../../assets/img/header/dress.svg'
import inst from '../../assets/img/footer/instagram.svg'
import facebook from '../../assets/img/footer/facebook.svg'
import twitter from '../../assets/img/footer/twitter.svg'
import pay from '../../assets/img/footer/visa-mastercard.png'


const Footer: React.FC = () => {
    const menuSections = [
        {title: 'Главная'},
        {
            title: 'Магазин',
            subItems: ['Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки']

        },
        {title: 'О бренде'},
        {title: 'Контакты'}
    ]
    return (

        <div className={` ${styles.root}`}>
            <div className=' d-flex justify-content-between container flex-column-reverse align-items-center flex-md-row gap-4 gap-md-0 align-items-md-start px-5 py-5'>
                <div className='d-flex align-items-center align-items-md-start flex-column gap-5'>
                    <div>
                        <img src={dress} alt='logo_dress'/>
                        <span>WOMAZING</span>
                    </div>
                    <div >
                        <span>&copy; Все права защищены <br/> Политика конфиденциальности <br/> Публичная оферта</span>
                    </div>
                </div>
                <div className={`d-none d-lg-block ${styles.center}`}>
                    <nav className="menu">
                        <ul className="nav">
                            {menuSections.map((section, index) => (
                                <li className="nav-item" key={index}>
                                    <a href='#'
                                       className={`${styles.sectionsName} nav-link ${index === 0 ? 'active' : ''}`}>
                                        {section.title}
                                    </a>
                                    {section.subItems && (
                                        <ul className="sub-items">
                                            {section.subItems.map((item, subIndex) => (

                                                <li className={`sub-item ${styles.subitem}`} key={subIndex}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
                <div className='d-flex flex-column align-items-center align-items-md-start gap-4'>
                    <div className='d-flex flex-column'>
                        <span>+7 (495) 823-54-12</span>
                        <span>hello@womazing.com</span>
                    </div>
                    <div className='d-flex gap-2'>
                        <img src={twitter} alt='twitter' />
                        <img src={facebook} alt='facebook'/>
                        <img src={inst} alt='instagram' />
                    </div>

                        <img className={styles.pay} src={pay} alt='pay' />
                </div>
            </div>
        </div>
    )
}

export default Footer