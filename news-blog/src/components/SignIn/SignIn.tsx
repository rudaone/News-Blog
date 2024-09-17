import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { signInUser } from '../../components/redux/actionCreators/userActionCreators'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }))
    }
    const handleSignIn = () => {
        const { email, password } = formState;
        dispatch(signInUser({ email, password }))
    }

    return (
        <div className='signin__page'>
            <div className="sign-in__title">
                <span className='signin__title-text'>Sign In</span>
            </div>
            <div className='signin-wrapper'>
                <div className='signin__input_container'>
                    <span className='input-span'>Email</span>
                    <input
                        className="input__email"
                        type='text'
                        placeholder='Your email'
                        onChange={(e: any) => handler('email', e.target.value)}
                    />

                    <span className='input-span'>Password</span>
                    <input
                        className="input__password"
                        placeholder='Your password'
                        type='password'
                        onChange={(e: any) => handler('password', e.target.value)}
                    />
                    <Link to="/sign-up" className='forgot-btn'>Forgot password?</Link>

                    <button className='signin-btn'
                        onClick={handleSignIn}
                        children='Sign In'
                    />


                    <div className='signin__footer-inner'>
                        <div className='reg__form-footer-text'>Don't have an account?</div>
                        <Link to="/sign-up" className='reg__form-footer-link'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SignIn }