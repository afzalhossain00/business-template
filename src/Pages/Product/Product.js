import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const Product = () => {
    return (
        <section className='my-20'>
            <h2 className='text-3xl text-center font-bold'>OUR PRODUCT</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-evenly text-base-content mt-10 ">
                <div className='text-center'>
                    <div className="avatar placeholder">
                        <div className="bg-lime-500 rounded-full w-16">
                            <span className='text-white text-5xl'><FaRegStar></FaRegStar></span>
                        </div>
                    </div>
                    <h3 className='text-2xl text-center font-semibold mt-3'>SEO</h3>
                    <p className='mt-3 text-center leading-tight font-semibold'>It is a long established <br /> fact that a reader will <br /> be directed by</p>
                </div>
                <div className='text-center'>
                    <div className="avatar placeholder">
                        <div className="bg-lime-500 rounded-full w-16">
                            <span className='text-white text-5xl'><FaRegStar></FaRegStar></span>
                        </div>
                    </div>
                    <h3 className='text-2xl text-center font-semibold mt-3'>BRANDING</h3>
                    <p className='mt-3 text-center leading-tight font-semibold'>It is a long established <br /> fact that a reader will <br /> be directed by</p>
                </div>
                <div className='text-center'>
                    <div className="avatar placeholder">
                        <div className="bg-lime-500 rounded-full w-16">
                            <span className='text-white text-5xl'><FaRegStar></FaRegStar></span>
                        </div>
                    </div>
                    <h3 className='text-2xl text-center font-semibold mt-3'>LOGO</h3>
                    <p className='mt-3 text-center leading-tight font-semibold'>It is a long established <br /> fact that a reader will <br /> be directed by</p>
                </div>
            </div>
        </section>
    );
};

export default Product;