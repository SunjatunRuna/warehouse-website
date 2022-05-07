import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = (props) => {
    const { name, price, img } = props.item
    return (
        <div className='mx-auto'>
            <Card className='shadow' style={{ width: '15rem', margin: '15px' }}>
                <Card.Img variant="top" src={img} className='img-fluid' style={{height: '180px'}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: BDT {price}
                    </Card.Text>
                    <Button variant="success">Add Item</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;