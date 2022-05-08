import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='my-5'>
            <h3>Product Detail: </h3>
            <div className='container-fluid my-5 shadow py-2 px-0 row w-50 mx-auto'>
                <div className='col-lg-5'>
                    <img src={data.img} className='img-fluid' alt="" />
                </div>
                <div className='col-lg-7 text-start'>
                    <h5>Fruit: {data.name}</h5>
                    <ul>
                        <li>Per kg price: {data.price}</li>
                        <li>{data.description}</li>
                        <li>Quantity: {data.quantity}</li>
                    </ul>
                    <button className='border-0 rounded mx-2 px-4'>EDIT</button>
                    <button className='border-0 rounded bg-success text-white px-4'>DELIVERED</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;