import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://immense-spire-20781.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='w-50 mx-auto my-5'>
            <h4 className='fw-bold my-5'>Add <span className='text-success'>Product</span>:</h4>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="img" className='text-start'>Photo URL: </label>
                <input className='border border-mute my-2 ps-2' name='img' type="text" {...register("img")} />
                <label htmlFor="name" className='text-start'>Name: </label>
                <input className='border border-mute my-2 ps-2' name='name' type="text" {...register("name")} />
                <label htmlFor="description" className='text-start'>Description: </label>
                <textarea className='border border-mute mb-2 ps-2' name='description' type="text" {...register("description")} />
                <label htmlFor="quantity" className='text-start'>Quantity: </label>
                <input className='border border-mute  mb-2 ps-2' name='quantity' type="number" {...register("quantity")} />
                <label htmlFor="supplier" className='text-start'>Supplier: </label>
                <input className='border border-mute my-2 ps-2' name='supplier' type="text" {...register("supplier")} />
                <label htmlFor="price" className='text-start'>Price: </label>
                <input className='border border-mute  mb-2 ps-2' name='price' type="number" {...register("price")} />
                <input className='py-2 bg-success text-white rounded' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;