import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Update = () => {
    const {id} = useParams();
    const [qty, setQty] = useState({});
    const [input, setInput] = useState('');

    useEffect(() => {
        const url = `https://immense-spire-20781.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQty(data));
    }, []);

    const inputField = event =>{
        const quantity = event.target.value;
        setInput(quantity)
    }
    const updateQty = () => {
        const updateQuantity = parseInt(qty.quantity) + parseInt(input);
        console.log(updateQuantity);
        const updateProduct = updateQuantity ;
        const url = `https://immense-spire-20781.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({updateProduct})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            toast('successful');
        })
    }

    
    return (
        <div className='my-5'>
            <h4 className='my-3'>Update Quantity: {qty.name}</h4>
            <input onBlur={inputField} className='border border-mute mx-3' name='quantity' type="number" />
            <button onClick={updateQty} className='border-0 px-3'>UPDATE</button>
            <ToastContainer />
        </div>
    );
};

export default Update;