import './Header.css'
import { HeaderLogo } from '../Icons/Header'
import { Search } from '../Search'
import { Username } from '../Username'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to={'/articles'} className='header-logo__link'>
                <HeaderLogo className='header-logo' />
            </Link>
            <Search />
            <Username />
        </header>
    )


}