import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [qty, setQty] = useState('');
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQty(data));
    }, []);
    const updateQty = event => {
        event.preventDefault();
        const quantity = event.target.qty.value;
        
        const updateProduct = quantity;
        fetch('http://localhost:5000/product', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('successful')
            event.target.reset
        })
    }

    
    return (
        <div className='my-5'>
            <h4 className='my-3'>Update Quantity: {qty.name}</h4>
            <form onSubmit={updateQty}>
                <input className='border border-mute mx-3' type="number" />
                <button className='border-0 px-3'>UPDATE</button>
            </form>
        </div>
    );
};

export default Update;