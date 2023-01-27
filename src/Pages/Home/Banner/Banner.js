import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="hero h-[500px] mb-5" style={{ backgroundImage: `url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                <div className="hero-overlay bg-green-500 bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-accent">
                        <h1 className="mb-5 text-4xl font-bold">WE HELP YOUR BUSINESS</h1>
                        <p className="mb-5 text-md font-semibold">It is a long established fact that a reader will be directed by <br /> the readable content of a page when looking at it's layout.</p>
                        <button className="inline-block cursor-pointer rounded-md bg-base-100 px-10 py-3 text-center text-sm font-bold uppercase text-accent transition duration-200 ease-in-out  hover:bg-primary">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;