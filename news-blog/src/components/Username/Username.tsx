import { useSelector } from 'react-redux';
import './Username.css';

const Username = ({
  className}: {username?: string; className?: string;}) => {
  // const username = useSelector((state: IStoreState) => state.user.user.username);
  
  const getInitials= (fullName: any) => { 
    if(fullName) { 
    return  fullName 
      .split('_') 
      .map((name: any) => name[0].toUpperCase()) 
      .join(''); 
    } 
  }
      
  return (
    <div className='userblock'>
      <div className="username">
        <div className="username__initials">{getInitials('Nikita Benji')}</div>
        <div className="username__fullname">{'Nikita Benji'}</div>
      </div>
    </div>
  );
};

export { Username };