import React from 'react'
import Products from '../Products/Products';
import GetStarted from './ItemPage/GetStartedPage';
import ItemOfPage3 from './ItemPage/ItemOfPage3';
import ItemOfPage4 from './ItemPage/ItemOfPage4';
import LogoPage from './ItemPage/LogoPage';
import MainPage from './ItemPage/MainPage';
import Page1 from './ItemPage/Page1';
import Page2 from './ItemPage/Page2';



const HomePage = () => {
    return (
        <div>
            <MainPage/>
            <LogoPage/>
            <GetStarted/>
            <Page1/>
            <Products/>
            <Page2/>
            <ItemOfPage3/>
            <ItemOfPage4/>
        </div>
    )
};

export default HomePage;