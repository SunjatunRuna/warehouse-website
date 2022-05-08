import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [qty, setQty] = useState('');
    const updateQty = event => {
        event.preventDefault();
        const quantity = qty.target.value;
        setQty(quantity);
    }
    return (
        <div>
            <h4>Update Quantity: </h4>
            <form onSubmit={updateQty}>
                <input className='border border-mute mx-3' type="number" />
                <button className='border-0 px-3'>UPDATE</button>
            </form>
        </div>
    );
};

export default Update;