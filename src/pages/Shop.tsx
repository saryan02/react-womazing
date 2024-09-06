import React, {useEffect} from "react";
import Header from "../components/header/Header";
import styles from "../scss/Shop.module.scss";
import {Link} from "react-router-dom";
import Categories from "../components/shop/categories";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCategoryId, setPageNumber} from "../redux/slices/sort/slice";
import Item from "../components/collectionItem";
import {fetchClothes} from "../redux/slices/cloth/slice";
import Pagination from "../components/pagination";
import Footer from "../components/footer";

const Shop: React.FC = () => {
    const dispatch = useDispatch();
    const {categoryId, pageNumber} = useSelector((state: RootState) => state.sortSlice);
    const clothes = useSelector((state: RootState) => state.clothSlice.items);

    const onClickCategory = (index: number) => {
        dispatch(setCategoryId(index));
        dispatch(setPageNumber(1)); // Сбрасываем страницу на первую при изменении категории
    };

    const onChangePage = (page: number) => {
        dispatch(setPageNumber(page));
    };

    useEffect(() => {

        // @ts-ignore
        dispatch(fetchClothes(`/catalog?page=${pageNumber}&limit=9&category=${categoryId}`));

    }, [pageNumber, categoryId]);

    return (
        <>
            <div className={`container ${styles.root} `}>
                <div className={''}>
                    <Header/>
                    <div className='d-flex flex-column gap-5'>
                        <div className={`d-flex flex-column align-items-center d-md-block ${styles.name_section}`}>
                            <span>Магазин</span>
                            <div className={styles.road}>
                                <Link to="/"> <span> Главная — </span></Link>
                                <span>Магазин</span>
                            </div>
                        </div>
                        <Categories value={categoryId} onClickButton={onClickCategory}/>

                        <div className={` ${styles.items}`}>
                            {clothes.map((obj, index) => (
                                <Link className={styles.link} key={obj.id} to={`/cloth/${obj.id}`}>
                                    <Item
                                        key={index}
                                        name={obj.name}
                                        price={obj.price}
                                        prevPrice={obj.previously_price}
                                        image={obj.image}
                                    />
                                </Link>
                            ))}
                        </div>

                        <Pagination count={clothes.length > 0 ? clothes[0].totalcount : 0} onChange={onChangePage}/>
                    </div>

                </div>

            </div>
            <Footer/>
        </>
    );
};

export default Shop;
