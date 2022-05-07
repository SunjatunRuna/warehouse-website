import React from 'react';

const Offer = () => {
    return (
        <div class="container-fluid my-5 px-4 w-75 text-white">
            <div className="row gx-5">
                <div className="col-lg-6 text-start">
                    <div className="p-5 border-0 shadow bg-warning"><h3>Special Offer</h3>
                        <span className='fw-bold'>Upto 40% off</span> <br />
                        <button className='border-0 my-3 py-2 px-3 bg-success text-white'>Order Now</button>
                    </div>
                </div>
                <div className="col-lg-6 text-start">
                    <div className="p-5 border-0 shadow bg-danger"><h3>Limited Offer</h3>
                        <span className='fw-bold'>Upto 50% off</span> <br />
                        <button className='border-0 my-3 py-2 px-3 bg-success text-white'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;