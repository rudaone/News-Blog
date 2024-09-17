import './SignUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../components/redux/actionCreators/userActionCreators'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const dispatch =useDispatch();
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })
    
    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSignUp = () => {
        const { confirm, ...other } = formState;
        alert('To continue registration, go to http://localhost:3000/activate/:uid/:token');
        dispatch(signUpUser(other))
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
                        onClick={handleSignUp}
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


export { SignUp }