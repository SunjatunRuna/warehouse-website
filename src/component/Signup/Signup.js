import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);

      const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
      const navigate = useNavigate()

    const emailBlur = event => {
        setEmail(event.target.value);
    }
    const passwordBlur = event => {
        setPassword(event.target.value);
    }
    const submitButton = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/home');
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
        <div className='cover-pic'>
            <form onSubmit={submitButton} className='w-25 px-5 mx-auto'>
                <h5 className='pt-5 pb-3 text-secondary fw-bold'>Create an account</h5>
                <input type="text" placeholder='username' className='w-100 mb-4 border-0 py-2 ps-2 rounded-pill' />
                <input onBlur={emailBlur} type="email" placeholder='email' className='w-100 mb-4 border-0 py-2 ps-2 rounded-pill' /><br />
                <input onBlur={passwordBlur} type="password" name="password" placeholder='password' id="" className='w-100 border-0 py-2 ps-2 rounded-pill' /><br />
                <button 
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                  }}
                className='w-100 mt-4 py-2 text-white border border-0 bg-success rounded-pill'>Sign up</button>
                <ToastContainer />
                <p className='text-secondary'>Already have an account <Link to='/login'>Login?</Link> </p>
            </form>
            <Social></Social>
        </div>
    );
};

export default Signup;