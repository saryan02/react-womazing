import React, {useEffect} from 'react';


import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./components/header/Header";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Test from "./pages/TEST";
import FullCloth from "./pages/FullCloth";
import Cart from "./pages/Cart";
import CartItem from "./components/cartItem";


function App() {


    return (

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>

                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    {/*<Route path='/test' element={<CartItem/>}/>*/}
                    <Route path='/cloth/:id' element={<FullCloth/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </Router>

    )
}

export default App;