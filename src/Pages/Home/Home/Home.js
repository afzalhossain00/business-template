import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Pricing from '../../Pricing/Pricing';
import Product from '../../Product/Product';

const Home = () => {
    return (
        <div>
            <h3 className='text-2xl'>This is Home Page</h3>
            <Product></Product>
            <Pricing></Pricing>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;