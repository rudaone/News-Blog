import './Header.css'
import { HeaderLogo } from '../Icons/Header'
import { Search } from '../Search'
import { SearchIcon } from '../Icons/SearchIcon'

export const Header = () => {
    return (
        <header>
            <HeaderLogo className='header-logo' />
            <Search/>
        </header>
    )


}