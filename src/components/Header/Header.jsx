import { useDispatch, useSelector } from 'react-redux';
import { logout, getIsLoggedIn, getUsername, getIsAuthing } from 'redux/auth';
import s from './Header.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAuthing = useSelector(getIsAuthing);
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div className={s.header}>
      <h1>Phonebook</h1>
      {isLoggedIn && (
        <div className={s.panel}>
          <div className={s.user}>
            <AiOutlineUser size={22} />
            <span>{name}</span>
          </div>
          <IoLogOutOutline
            size={25}
            className={isAuthing ? s.disabled : s.logout}
            onClick={() => dispatch(logout())}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
