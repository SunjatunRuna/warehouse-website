import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Product from '../Product/Product';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='my-5'>
            <h3 className='text-secondary my-5 fw-bold'><span className='border-bottom border-success'>Our</span> <span className='text-success'>Products</span></h3>
            <div className='container-fluid row'>
            <div className='col-lg-8 mx-auto row row-cols-lg-2'>
                {
                    items.map(item => (
                        <Product
                            key={item._id}
                            item={item}
                        ></Product>
                    ))
                }
            </div>
            <div className='col-lg-4'>
                Add Items: 
            </div>
            </div>
        </div>
    );
};

export default ManageInventories;