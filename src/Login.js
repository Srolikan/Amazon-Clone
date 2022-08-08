import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

    }

    const signUp = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword
    }

    return (
        <div className='main__layout'>
            <div className='login'>
                <Link to='/'>
                    <div className='logo'>
                        <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' className='img__logo' alt='logo' />
                    </div>
                </Link>
                <form className='login__layout'>
                    <h5>E-Mail</h5>
                    <input type='text' />
                    <h5>Password</h5>
                    <input type='password' />
                    <button className='first__button'>Sign In</button>
                    <button className='second__button'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}