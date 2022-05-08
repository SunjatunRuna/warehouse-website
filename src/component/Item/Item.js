import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const { _id, name, price, img } = item;
    const navigate = useNavigate();

    const updateButton = id =>{
        navigate(`/inventory/${id}`);
        console.log(id)
    }
    return (
        <div className='mx-auto'>
            <Card className='shadow' style={{ width: '15rem', margin: '15px' }}>
                <Card.Img variant="top" src={img} className='img-fluid' style={{height: '180px'}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: BDT {price}
                    </Card.Text>
                    <Button onClick={ () => updateButton(_id)} variant="success">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;