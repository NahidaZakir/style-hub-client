import React from 'react';
import banner from '../../../assets/banner/banner.jpg';
const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Style Hub</h1>
                    <p className="mb-5 text-2xl text-white">Wear what you like without worrying about the price</p>
                    <button className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;