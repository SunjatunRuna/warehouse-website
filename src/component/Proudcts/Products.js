import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Item from '../Item/Item';

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://immense-spire-20781.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return (
        <div className='my-5'>
            <h3 className='text-secondary my-5 fw-bold'><span className='border-bottom border-success'>Our</span> <span className='text-success'>Products</span></h3>
            <CardGroup className='w-75 mx-auto'>
                {
                    items.map(item => (
                        <Item
                            key={item._id}
                            item={item}
                        ></Item>
                    ))
                }
            </CardGroup>
        </div>
    );
};

export default Products;