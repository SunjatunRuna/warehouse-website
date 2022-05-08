import React from 'react';

const Product = ({item}) => {
    const {img, name, price} = item;
    return (
        <div className='container-fluid mx-auto my-3 row'>
            <div className='col-lg-5'>
                <img src={img} alt="" className='img-fluid w-75' />
            </div>
            <div className='col-lg-7 text-start'>
                <h5>{name}</h5>
                <small>Price: {price}</small><br />
                <button className='border-0 bg-success text-white rounded'>Delete Item</button>
            </div>
        </div>
    );
};

export default Product;