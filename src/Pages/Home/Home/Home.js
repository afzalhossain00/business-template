import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Product from '../../Product/Product';
import Review from '../../Review/Review';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <AboutUs></AboutUs>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;