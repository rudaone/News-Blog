import './SignUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../components/redux/actionCreators/userActionCreators'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
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
        <div className='signup__page'>
            <div className="sign-up__title">
                <span className='signup__title-text'>Sign Up</span>
            </div>
            <div className='signup-wrapper'>
                <div className='signup__input_container'>
                    <span className='input-span'>Name</span>
                    <input
                        className="input__email"
                        type='text'
                        placeholder='Your email'
                        onChange={(e: any) => handler('email', e.target.value)}
                    />
                    <span className='input-span'>Email</span>
                    <input
                        className="input__email"
                        type='text'
                        placeholder='Your email'
                        onChange={(e: any) => handler('email', e.target.value)}
                    />
                    <span className='input-span'>Password</span>
                    <input
                        className="input__email"
                        type='password'
                        placeholder='Your email'
                        onChange={(e: any) => handler('email', e.target.value)}
                    />

                    <span className='input-span'>Confirm password</span>
                    <input
                        className="input__password"
                        placeholder='Your password'
                        type='password'
                        onChange={(e: any) => handler('password', e.target.value)}
                    />

                    <button className='signup-btn'
                        onClick={handleSignUp}
                        children='Sign Up'
                    />
                    <div className='signin__footer-inner'>
                        {/* <div className='reg__form-footer-text'>Don't have an account?</div>
                        <Link to="/sign-up" className='reg__form-footer-link'>Sign up</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export { SignUp }