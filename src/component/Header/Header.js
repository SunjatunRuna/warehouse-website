import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logoutBtn = () => {
        signOut(auth)
    }
    return (
        <div className='bg-light'>
            <h3 className='mt-4'>Healthy Fruits Store</h3>
            <nav className='mt-4 bg-success p-3 text-start'>
                <div className='container'>
                    <Link to='/' className='menu'>Home</Link>
                    <Link to='' className='menu'>Products</Link>
                    <Link to='/about' className='menu'>About</Link>
                    <Link to='/blogs' className='menu'>Blogs</Link>
                    <Link to='' className='menu'>Reviews</Link>
                    <span className='text-end'>
                        {
                            user ?
                                <button onClick={logoutBtn} className='btn btn-success text-white border-0'>Logout</button>
                                :
                                <Link to='/login' className='menu text-end'>Login</Link>
                        }
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Header;