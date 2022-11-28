import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import ProductCategories from './ProductCategories/ProductCategories';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <AboutUs></AboutUs>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;