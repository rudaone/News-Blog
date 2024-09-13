import { useSelector } from 'react-redux';
import './Username.css';

const Username = ({
  className}: {username?: string; className?: string;}) => {
  // const username = useSelector((state: IStoreState) => state.user.user.username);

  let fullName = 'Nikita Benji'

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