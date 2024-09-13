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
        <div className='registration__page'>
       <div className='reg__form-wrapper'>
          <div className='input__container'>
            <input 
                placeholder={'Your name'}
                className="input"
                value={formState.username}
                onChange={(e: any) => handler('username', e.target.value)}
            />

            <input 
                placeholder={'Your email'}
                className="input"
                value={formState.email}
                onChange={(e: any) => handler('email', e.target.value)}
            />

            <input 
                placeholder={'Your password'}
                className="input"
                value={formState.password}
                onChange={(e: any) => handler('password', e.target.value)}
            />

            <input 
                placeholder={'Confirm password'}
                className="input"
                value={formState.confirm}
                onChange={(e: any) => handler('confirm', e.target.value)}
            />
            </div>
            <div className='sign_up_button-container'>
                <button 
                    className='sign_up-button'
                    onClick={handleSignUp}       
                    children='SIGN UP'
                />
            </div>
           
            <footer className='reg__form-footer'>
                <div className='reg__form-footer-inner'>
                    <div className='reg__form-footer-text'>Already have an account?</div>
                    <Link to="/sign-in" className='reg__form-footer-btn'>Sign in</Link>
                </div>
            </footer>
        </div>
        </div>
    )
}


export { SignUp }