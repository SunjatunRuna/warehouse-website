import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        fetch('https://immense-spire-20781.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const deleteItem = id =>{
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `https://immense-spire-20781.herokuapp.com/product/${id}`;
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
    const addMoreButton = () =>{
        navigate('/add');
    }
    return (
        <div className='my-5'>
            <h3 className='text-secondary my-5 fw-bold'><span className='border-bottom border-success'>Our</span> <span className='text-success'>Products</span></h3>
            <div className='container-fluid'>
                <div className='w-75 mx-auto row row-cols-lg-2'>
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
                <button onClick={addMoreButton} className='border-0 bg-success rounded my-5 w-50 py-2 text-white fw-bold'>Add More</button>
            </div>
        </div>
    );
};

export default ManageInventories;