import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row text-secondary shadow'>
                <div className='col-lg-4'>
                    <h6 className='my-4 fw-bold'>Healthy Fruits Store</h6>
                    <p><i className="fa-brands fa-facebook mx-2 fs-2 text-primary"></i>
                        <i className="fa-brands fa-instagram mx-2 fs-2" style={{ color: 'violet' }}></i>
                        <i className="fa-brands fa-whatsapp mx-2 fs-2 text-success"></i>
                    </p>
                </div>
                <div className='col-lg-4'>
                    <h6 className='my-4 fw-bold'>Contact US</h6>
                    <p><i className="fa-solid fa-phone text-success pe-2"></i><span>01600000000</span></p>
                    <p><i className="fa-solid fa-envelope text-danger pe-2"></i><span>healthyfruits@gmail.com</span></p>
                </div>
                <div className='col-lg-4'>
                    <h6 className='my-4 fw-bold'>Quick Links</h6>
                    <ul>
                        <li><Link to='/home' className='menu text-success'>Home</Link> </li>
                        <li><Link to='/about' className='menu text-success'>About</Link> </li>
                        <li><Link to='/blogs' className='menu text-success'>Blogs</Link> </li>
                        <li><Link to='/reviews' className='menu text-success'>Reviews</Link> </li>
                    </ul>
                </div>
                <p className='bg-success text-white py-3'>Created by <span className=' fw-bold'>Sunjatun Ahmed Runa</span> || Copyright &copy; 2022</p>
            </div>
            
        </div>
    );
};

export default Footer;