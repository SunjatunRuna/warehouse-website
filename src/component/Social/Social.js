import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userTwo] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }
    if(userTwo){
        navigate('/home')
    }
    return (
        <div>
            <button onClick={()=> signInWithGoogle()} className='border-0 py-2 px-2 mx-1 rounded-pill'>
                <i className="fa-brands fa-google pe-2 text-danger"></i>Google</button>
            <button onClick={()=> signInWithFacebook()} className='border-0 py-2 px-2 mx-1 rounded-pill'>
                <i className="fa-brands fa-facebook-f pe-2 text-primary"></i>facebook</button>
        </div>
    );
};

export default Social;