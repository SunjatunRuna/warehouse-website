import React from 'react';

const Offer = () => {
    return (
        <div class="container-fluid my-5 px-4 w-75">
            <div className="row gx-3">
                <div className="col-lg-6">
                    <div className="p-5 border border-success rounded fw-bold w-75 text-success shadow"><h3>Special Offer</h3>
                        <span className='fw-bold'>Upto 40% off</span> <br />
                        <button className='border-0 bg-success my-3 py-2 rounded px-3 text-white'>Order Now</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5 border border-white fw-bold rounded w-75 shadow bg-success text-white"><h3>Limited Offer</h3>
                        <span className='fw-bold'>Upto 50% off</span> <br />
                        <button className='border-0 bg-white my-3 py-2 px-3 rounded text-success'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;