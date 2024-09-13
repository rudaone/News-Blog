import { useSelector } from 'react-redux';
import './Username.css';
import { IStoreState } from '../../types';

const Username = ({
  className}: {username?: string; className?: string;}) => {
  const userName = useSelector((state: IStoreState) => state.user.user.username);

  let fullName =  'Nikita Bejiamin'

  let array = fullName.toUpperCase().split(' ').map((e)=>e[0])



      
  return (
    <div className='userblock'>
      <div className="username">
        <div className="username__initials">{array}</div>
        <div className="username__fullname">{fullName}</div>
      </div>
    </div>
  );
};

export { Username };