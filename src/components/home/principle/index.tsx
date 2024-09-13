import React from 'react'
import styles from "./Principle.module.scss"
import check from "../../../assets/img/home/principle/check.svg"
import gear from "../../../assets/img/home/principle/gear.svg"
import hand from "../../../assets/img/home/principle/hand.svg"

const Index: React.FC = () => {

    const principles = [
        {
            img: check,
            title: 'Качество',
            description: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества"
        },
        {
            img: gear,
            title: 'Скорость',
            description: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах"
        },
        {
            img: hand,
            title: "Ответственность",
            description: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing"
        }
    ]

    return (
        <div className={` ${styles.container} container d-flex flex-column align-items-center align-items-md-start`}>
            <h2>Что для нас важно</h2>


            <div className='d-flex justify-content-between flex-column align-items-center gap-5 align-items-lg-start flex-lg-row'>
                {principles.map((obj, index) => (
                    <div className={`${styles.principle} d-flex flex-column align-items-center text-lg-start text-center `} key={index}>
                        <img src={obj.img} alt='принцип'/>
                        <h3>{obj.title}</h3>
                        <span>{obj.description}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Index