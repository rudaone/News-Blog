import { useState } from 'react';
import './Search.css'
import { CancelIcon } from '../Icons/CancelIcon';
import { SearchIcon } from '../Icons/SearchIcon';
import { useNavigate, Navigate } from 'react-router-dom';

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOnFocus = () => {
    setIsActive(true);
  };
  const handleOnBlur = () => {
    setIsActive(false);
  };
  const navigate = useNavigate();


  const [value, setValue] = useState('');


  return (
    <div className='search__container'>
      <input
        className={'header__search ' + (isActive ? ' header__search-active' : '')}
        placeholder={isActive ? 'Enter your search query...' : ''}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate(`/articles/search-results?search=${value}`);
          }
        }}
      />

      {isActive && <CancelIcon className='cancellion-icon' isActive={isActive} onClick={() => setValue('')} />}
      {/* {value.length !== 0 && <CancelIcon onClick={() => setValue('')} />} */}
      <SearchIcon className='search-icon'/>

    </div>
  );
};

export { Search };  