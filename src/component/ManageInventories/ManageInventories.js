import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const deleteItem = id =>{
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = items.filter(item => item._id !== id)
                setItems(remaining)
            })
        }
    }
    return (
        <div className='my-5'>
            <h3 className='text-secondary my-5 fw-bold'><span className='border-bottom border-success'>Our</span> <span className='text-success'>Products</span></h3>
            <div className='container-fluid row'>
                <div className='col-lg-8 mx-auto row row-cols-lg-2'>
                    {
                        items.map(item => (
                            <div className='container-fluid mx-auto my-3 row'>
                                <div className='col-lg-5'>
                                    <img src={item.img} alt="" className='img-fluid w-75' />
                                </div>
                                <div className='col-lg-7 text-start'>
                                    <h5>{item.name}</h5>
                                    <small>Price: {item.price}</small><br />
                                    <button onClick={() => deleteItem(item._id)} className='border-0 bg-success text-white rounded'>Delete Item</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='col-lg-4'>
                    <h5 className='fw-bold mb-3'>Add Items:</h5>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="img" className='text-start'>Photo URL: </label>
                        <input className='border border-mute my-2 ps-2' type="text" {...register("img")} />
                        <label htmlFor="name" className='text-start'>Name: </label>
                        <input className='border border-mute my-2 ps-2' type="text" {...register("name")} />
                        <label htmlFor="description" className='text-start'>Description: </label>
                        <textarea className='border border-mute mb-2 ps-2' type="text" {...register("description")} />
                        <label htmlFor="quantity" className='text-start'>Quantity: </label>
                        <input className='border border-mute  mb-2 ps-2' type="number" {...register("quantity")} />
                        <label htmlFor="price" className='text-start'>Price: </label>
                        <input className='border border-mute  mb-2 ps-2' type="number" {...register("number")} />
                        <input className='py-2 bg-success text-white rounded' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;