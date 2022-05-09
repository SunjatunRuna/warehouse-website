import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img from './360_F_208877202_ajKv3atSZW21td1xR8lFxn6QJvyWBe8c-removebg-preview.png';
import imgTwo from './images-removebg-preview.png';
import imgThree from './48484522-people-sending-and-receiving-money-wirelessly-with-their-mobile-phones-.jpg';

const Features = () => {
    return (
        <div className='container-fluid my-5'>
            <h3 className='my-5'><span className='border-bottom border-success'>Our</span> <span className='text-success fw-bold'>Features</span></h3>
            <div className='container-fluid w-75 mx-auto row gx-5'>
                <div className="col-lg-4">
                    <Card className='shadow' style={{ width: '15rem', margin: '15px' }}>
                        <Card.Img variant="top" src={img} className='img-fluid' style={{ height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Fresh And Organic</Card.Title>
                            <Card.Text>
                                Get fresh and organic fruits from here.........
                            </Card.Text>
                            <Card.Footer className='bg-white border border-success py-0 m-0'>
                                <Button variant="white" className='text-success'>Read More</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className='shadow' style={{ width: '15rem', margin: '15px' }}>
                        <Card.Img variant="top" src={imgTwo} className='img-fluid' style={{ height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Free Delivery</Card.Title>
                            <Card.Text>
                                Get fresh and organic fruits from here.........
                            </Card.Text>
                            <Card.Footer className='bg-white border border-success py-0 m-0'>
                                <Button variant="white" className='text-success'>Read More</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className='shadow' style={{ width: '15rem', margin: '15px' }}>
                        <Card.Img variant="top" src={imgThree} className='img-fluid' style={{ height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Easy To Payment</Card.Title>
                            <Card.Text>
                                Get fresh and organic fruits from here.........
                            </Card.Text>
                            <Card.Footer className='bg-white border border-success py-0 m-0'>
                                <Button variant="white" className='text-success'>Read More</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Features;