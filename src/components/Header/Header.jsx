import { useDispatch, useSelector } from 'react-redux';
import { logout, getIsLoggedIn, getUsername } from 'redux/auth';
import s from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div className={s.header}>
      <h1>Phonebook</h1>
      {isLoggedIn && (
        <div className={s.user}>
          <span>{name}</span>
          <button
            className={s.logout}
            type={'button'}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
