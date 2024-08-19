import React, {useEffect} from "react";
import dressLogo from "../../assets/img/header/dress.svg";
import cart from "../../assets/img/header/shopping-bags.svg"
import styles from "./Header.module.scss"
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPageId} from "../../redux/slices/header/slice";
import {RootState} from "../../redux/store";


type HeaderProps = {
    value: number;
    onClickSection: (i: number) => void

}
const Header: React.FC = () => {
    const menuList = ["Главная", "Магазин", "О бренде", "Контакты"];
    const dispatch = useDispatch()
    const pageLink = useSelector((state:RootState) =>(state.headerSlice.pageLink) )
    const location = useLocation();
    const isMounted = React.useRef(false)
    const items = useSelector((state:RootState) => state.cartSlice.items)


    useEffect(() =>{
        if(isMounted.current){
            localStorage.clear()
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
        }
        isMounted.current = true
    }, [items])
    const getPath = (index: number) => {

        switch (index) {
            case 0: return '/'
            case 1: return '/shop'
            case 2: return '/about'
            case 3: return '/contacts'
            default: return '/'
        }
    }

    return (

        <div className='container d-flex justify-content-between'>
            <div className={styles.logo}>

                <img src={dressLogo} alt="dress"/>
                <span>WOMAZING</span>
            </div>

            <div className={styles.menu}>
                {menuList.map((categoryName, index) => (
                    <Link to={getPath(index)}>
                    <button key={index}
                            className={location.pathname === getPath(index) ? styles.active : ''}>{categoryName}</button>
                    </Link>
                ))}

            </div>
            <div className={styles.contacts}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_55630_602)">
                        <path d="M8.25241 7.81643C6.75058 9.31823 6.75058 11.7618 8.25238 13.2636L9.05007 12.4659C7.98816 11.404 7.98814 9.67613 9.0501 8.61417C10.112 7.55224 11.8399 7.55224 12.9018 8.61414L13.6995 7.81646C12.1978 6.31463 9.75418 6.31466 8.25241 7.81643Z" fill="#6E9C9F"/>
                        <path d="M9.84127 9.39119C9.2091 10.0234 9.20907 11.052 9.84124 11.6842L10.639 10.8865C10.5458 10.7934 10.4945 10.6695 10.4945 10.5377C10.4945 10.406 10.5458 10.2821 10.639 10.1889C10.7322 10.0958 10.856 10.0444 10.9878 10.0444C11.1195 10.0444 11.2434 10.0958 11.3366 10.1889L12.1343 9.39122C11.5021 8.75902 10.4734 8.75902 9.84127 9.39119Z" fill="#6E9C9F"/>
                        <path d="M19.7483 7.43513L17.8551 5.54848L13.9234 9.47367L15.4476 11.0478C15.1921 11.5013 14.6379 12.3699 13.6933 13.3145C12.7487 14.2592 11.8737 14.8197 11.4159 15.0792L9.87261 13.5556L6.00226 17.4029L7.8851 19.2983C8.60485 20.0181 9.69998 20.2046 10.6102 19.7625C11.9992 19.0879 14.0955 17.8431 16.1943 15.7443C18.2931 13.6455 19.5379 11.5492 20.2125 10.1602C20.3723 9.83109 20.45 9.47787 20.45 9.12692C20.45 8.5072 20.2078 7.89464 19.7483 7.43513ZM19.1977 9.66732C18.5609 10.9785 17.3845 12.9587 15.3966 14.9466C13.4087 16.9345 11.4285 18.1109 10.1174 18.7477C9.63935 18.9799 9.06287 18.8806 8.6842 18.5019L7.59746 17.4079L9.87543 15.1436L11.1901 16.4415L11.5419 16.2849C11.5991 16.2595 12.9595 15.6438 14.4912 14.1121C16.0239 12.5795 16.6267 11.2305 16.6515 11.1739L16.8041 10.8268L15.5068 9.48705L17.8559 7.14178L18.9512 8.23327C19.3307 8.6133 19.4298 9.18952 19.1977 9.66732Z" fill="#6E9C9F"/>
                    </g>
                </svg>

                <span>+7 (495) 823-54-12</span>

                <img src={cart} alt="cart"/>
            </div>
        </div>
    )
}

export default Header