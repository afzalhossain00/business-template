import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Pricing from '../../Pricing/Pricing';
import Product from '../../Product/Product';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Pricing></Pricing>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;