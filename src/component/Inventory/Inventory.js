import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Inventory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='my-5'>
            <h3>Product Detail: </h3>
            <div className='container-fluid my-5 row w-100 mx-auto'>
                <div className='col-lg-6 row'>
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
                    </div>
                </div>
                <div className='col-lg-6'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-bottom border-mute' {...register("name")} />
                        <input className='border-bottom border-mute' type="number" {...register("number")} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;