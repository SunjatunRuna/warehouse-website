import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import img from './sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg'
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailBlur = event => {
        setEmail(event.target.value);
    }
    const passwordBlur = event => {
        setPassword(event.target.value);
    }
    const submitButton = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, {replace: true});
    }
    if(sending){
        return <p className='mt-5 py-5'><Spinner animation="grow" /></p>
    }
    if(error){
        return <div>
            <p>Error: {error.message}</p>
        </div>
    }
    return (
        <div className='container'>
            <div className='row gx-5'>
                <div className='col-lg-6 mt-5'>
                    <form onSubmit={submitButton} className='my-5 border form-bg shadow w-75 px-5 mx-auto'>
                        <h3 className='my-4'><i className="fa-solid fa-user fs-1 text-success"></i></h3>
                        <input onBlur={emailBlur} type="email" placeholder='email' className='w-100 mb-4 border-bottom border-mute' /><br />
                        <input onBlur={passwordBlur} type="password" name="password" placeholder='password' id="" className='w-100 border-bottom border-mute' /><br />
                        <button className='w-100 text-white py-2 mt-4 border border-0 bg-success rounded'>Login</button>
                        <button 
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            toast('Email has been sent');
                          }}
                        className='btn-link bg-white text-danger mt-2 border-0'>Reset Password?</button>
                        <ToastContainer />
                        <p className='mb-5'>Don't have an account? <Link to='/signup'>Create a new one</Link> </p>
                    </form>
                </div>
                <div className='col-lg-6'>
                    <img src={img} alt="" className='img-fluid' />
                </div>

            </div>
        </div>
    );
};

export default Login;