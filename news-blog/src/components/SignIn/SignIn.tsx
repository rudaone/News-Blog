
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
        dispatch(signInUser({email, password}))
    }

    return (
        <div className='signin__page'>
            <div className='signin-wrapper'>
                <div className='signin__input_container'>
                    <input 
                        className="input"
                        placeholder='Your email'
                        onChange={(e: any) => handler('email', e.target.value)}
                    />

                    <input 
                        className="input"
                        placeholder='Your password'
                        onChange={(e: any) => handler('password', e.target.value)}
                    />
                    <Link to="/sign-up" className='forgot-btn'>Forgot password?</Link>
                    
                    <button className='signin-btn'
                        onClick={handleSignIn}           
                        children='SIGN IN'
                    />

                    <footer className='reg__form-footer'>
                        <div className='signin__footer-inner'>
                            <div className='reg__form-footer-text'>Don't have an account?</div>
                            <Link to="/sign-up" className='reg__form-footer-btn'>Sign up</Link>
                        </div>
                    </footer>
                    </div>
                </div>
        </div>
    )
}

export { SignIn }