import './Header.css'
import { HeaderLogo } from '../Icons/Header'
import { Search } from '../Search'
import { Username } from '../Username'
import { Link } from 'react-router-dom'

const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    console.log("User after logout:");
    window.location.pathname = '/sign-in';
}


export const Header = () => {
    return (
        <header>
            <Link to={'/articles'} className='header-logo__link' >
                <HeaderLogo className='header-logo' />
            </Link>
            <Search />
            {localStorage.getItem('access') ? (
                <Link className='exit__link' to='/articles' onClick={handleLogout}><Username /></Link> 
            ) : (
                    <Link className='sign-in__link' to='/sign-in'> <button className='sign-in__button'>sign in</button> </Link>
            )}
        
        </header>
    )


}