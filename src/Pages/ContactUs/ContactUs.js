import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const ContactUs = () => {
    useTitle('Contact Us')
    return (
        <div className='bg-emerald-500 py-10 flex items-center justify-center mx-auto px-4'>
            <input type="text" placeholder="Email ID" className="input w-full max-w-xs mr-4" />
            <button className="inline-block cursor-pointer rounded-md bg-base-100 px-4 py-3 text-center text-sm font-bold uppercase text-accent transition duration-200 ease-in-out  hover:bg-primary">Subscribe</button>
        </div>
    );
};

export default ContactUs;