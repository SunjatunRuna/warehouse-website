import React from 'react';
import Features from '../Feauters/Features';
import Footer from '../Footer/Footer';
import Offer from '../Offer/Offer';
import Products from '../Proudcts/Products';
import img from './grapes-apples-basket-fruit-wallpaper.jpg'

const Home = () => {
    return (
        <div>
            <div className='container-fluid row'>
                <div className='col-lg-8'>
                    <img src={img} className='img-fluid w-100' alt="" />
                </div>
                <div className='col-lg-4 d-block mt-5 pt-5'>
                    <h1 className='mt-5'>Your Daily Need Fresh Fruits</h1>
                    <button className='border border-o bg-success rounded px-4 py-2 mt-3 text-white'>Buy Now</button>
                </div>
            </div>
            <Features></Features>
            <Products></Products>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default Home;