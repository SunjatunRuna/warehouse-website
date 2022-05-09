import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [reload])
    const reduceQuantity = () => {
        const quantity = parseInt(data.quantity) - 1;
        const updateQuantity = {quantity};
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Delivered Successful');
            setReload(!reload);
        })
    }
    const navigate = useNavigate()
    const updateQuantity = id =>{
        navigate(`/update/${id}`)
    }
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
                    <button onClick={() => updateQuantity(data._id)} className='border-0 rounded mx-2 px-4'>EDIT</button>
                    <button onClick={reduceQuantity} className='border-0 rounded bg-success text-white px-4'>DELIVERED</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Inventory;