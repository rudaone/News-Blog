// import { useState } from 'react';
// import './Search.css'
// import { CancelIcon } from '../Icons/CancelIcon';
// import { SearchIcon } from '../Icons/SearchIcon';
// import { useNavigate, Navigate } from 'react-router-dom';

// const Search = () => {
//   const [isActive, setIsActive] = useState(false);
//   const handleOnFocus = () => {
//     setIsActive(true);
//   };
//   const handleOnBlur = () => {
//     setIsActive(false);
//   };
//   const navigate = useNavigate();


//   const [value, setValue] = useState('');


//   return (
//     <div className='search__container'>
//       <input
//         className={'header__search ' + (isActive ? ' header__search-active' : '')}
//         placeholder={isActive ? 'Enter your search query...' : ''}
//         onFocus={handleOnFocus}
//         onBlur={handleOnBlur}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             navigate(`/articles/search-results?search=${value}`);
//           }
//         }}
//       />

//       {/* {isActive && <CancelIcon  isActive={isActive} onClick={() => setValue('')} />} */}
//       {/* {value.length !== 0 && <CancelIcon className='cancellion-icon' onClick={() => setValue('')} />} */}
//       {/* <SearchIcon className='search-icon'/> */}

//     </div>
//   );
// };

// export { Search };  


import { useState } from 'react';
import './Search.css';
import { CancelIcon } from '../Icons/CancelIcon';
import { SearchIcon } from '../Icons/SearchIcon';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [search, setValue] = useState('');

  const navigate = useNavigate();

  const handleClearSearch = () => {
    setValue('');
    setIsActive(false);
  };

  const handleSearch = () => {
    navigate(`/search-results?search=${search}`);
  };

  return (
    <div className='search__wrapper'>
      <input
        className={`search_input ${isActive ? 'search_input-active' : ''}`}
        placeholder={isActive ? 'Search...' : ''}
        value={search}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onFocus={() => setIsActive(true)}
        onBlur={() => {
          setTimeout(() => {
            if (search === '') {
              setIsActive(false);
            }
          }, 200);
        }}
      />
      <div className='icons'>
        {!isActive && (
          <SearchIcon />
        )}
        {isActive && search && (
          <CancelIcon onClick={handleClearSearch} />
        )}
      </div>
    </div>
  );
};

export { Search };
